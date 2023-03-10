import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TweetsComponent } from "./tweets";
import reportWebVitals from "./reportWebVitals";

const root2 = ReactDOM.createRoot(document.getElementById("tweet-2"));
root2.render(
  <React.StrictMode>
    <TweetsComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
