import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";

function Feeds({ posts }) {
  return (
    <div className="feeds">
      <StartPost savePost={savePost} />
      <div className="feed__Post">
        {posts &&
          posts.map((post) => {
            return <Post text={post.text} />;
          })}
      </div>
    </div>
  );
}

export default Feeds;
