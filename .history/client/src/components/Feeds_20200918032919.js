import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";

const savePost = async (data) => {
  const allPosts = [...posts];
  const params = {
    text: data,
  };

  try {
    const response = await HttpService.post("/create/post", params);

    allPosts.push(response.data.data);
    setPosts(allPosts);
  } catch (e) {
    console.log(e);
  }
};

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
