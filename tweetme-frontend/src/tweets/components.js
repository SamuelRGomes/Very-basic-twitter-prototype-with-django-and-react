import { useEffect, useRef, useState } from "react";

import { loadTweets } from "../lookup";
import { createTweet } from "../lookup/lookup";
export function TweetsComponent(props) {
  const textAreaRef = useRef();
  const [newTweets, setNewTweets] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = textAreaRef.current.value;
    let tempTweets = [...newTweets];
    createTweet(value, (response, status) => {
      if (status === 201) {
        tempTweets.unshift(response);
      } else {
        console.log(response);
        alert("an error occurred");
      }
    });

    setNewTweets(tempTweets);
    textAreaRef.current.value = "";
  };
  return (
    <div className={props.className}>
      <div className="col-12 mb-3">
        <form onSubmit={handleSubmit}>
          <textarea ref={textAreaRef} required={true} className="form-control" name="tweet"></textarea>
          <button type="submit" className="btn btn-primary my-3">
            Tweet
          </button>
        </form>
      </div>
      <TweetsList newTweets={newTweets} />
    </div>
  );
}
export function TweetsList(props) {
  const [tweetsInit, setTweetsInit] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [tweetsDidSet, setTweetsDidSet] = useState(false);
  //   setTweets([...props.tweet].concat(tweets));
  useEffect(() => {
    const final = [...props.newTweets].concat(tweetsInit);
    if (final.length != tweets.length) {
      setTweets(final);
    }
  }, [tweetsInit, props.newTweets, tweets]);

  useEffect(() => {
    if (tweetsDidSet == false) {
      const myCallback = (response, status) => {
        if (status === 200) {
          setTweetsInit(response);
          setTweetsDidSet(true);
        } else {
          alert("There was an error");
        }
      };
      loadTweets(myCallback);
    }
  }, [tweetsInit, tweetsDidSet, setTweetsDidSet]);
  return tweets.map((tweetItem, index) => {
    return <Tweet tweet={tweetItem} key={index} className="my-5 py-5 border bg-white text-dark" />;
  });
}

export function ActionBtn(props) {
  const { tweet, action } = props;
  const className = props.className ? props.className : "btn btn-primary btn-sm";
  const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
  const [wasLiked, setWasLiked] = useState(true);
  const display = action.type === "like" ? `${likes} ${action.display}` : action.display;
  const handleClick = (event) => {
    event.preventDefault();
    if (action.type === "like") {
      if (wasLiked == true) {
        setWasLiked(false);
        setLikes(likes + 1);
      } else if (wasLiked == false) {
        setWasLiked(true);
        setLikes(likes - 1);
      }
    }
  };
  return (
    <button className={className} onClick={handleClick}>
      {display}
    </button>
  );
}

export function Tweet(props) {
  const { tweet } = props;
  const className = props.className ? props.className : "col-10 mx-auto col-md-6";
  return (
    <div className={className}>
      <p>
        {tweet.id} - {tweet.content}
      </p>
      <div className="btn btn-group">
        <ActionBtn tweet={tweet} action={{ type: "like", display: "Likes" }} />
        <ActionBtn tweet={tweet} action={{ type: "unlike", display: "Unlike" }} />
        <ActionBtn tweet={tweet} action={{ type: "retweet", display: "Retweet" }} />
      </div>
    </div>
  );
}
