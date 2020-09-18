import React from "react";
import StartPost from "./StartPost";
import Post from "./Post";
import "./Feeds.css";

function Feeds() {
  return (
    <div className="feeds">
      <StartPost />
      <div className="feed__Post">
        <Post />
      </div>
    </div>
  );
}

export default Feeds;
