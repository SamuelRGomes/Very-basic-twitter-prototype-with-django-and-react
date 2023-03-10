function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function lookup(method, endpoint, callback, data) {
  let jsonData;
  if (data) {
    jsonData = JSON.stringify(data);
  }
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8000/api${endpoint}`;
  xhr.responseType = "json";
  const csrftoken = getCookie("csrftoken");
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-CSRFToken", csrftoken);
  xhr.onload = function () {
    callback(xhr.response, xhr.status);
  };
  xhr.onerror = function () {
    callback({ message: "The request was an error" }, 400);
  };
  xhr.send(jsonData);
}
export function createTweet(newTweet, callback) {
  lookup("POST", "/tweets/create/", callback, { content: newTweet });
}

export function loadTweets(callback) {
  lookup("GET", "/tweets/", callback);
}
