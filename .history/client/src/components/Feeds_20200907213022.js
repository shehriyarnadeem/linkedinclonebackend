import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import "./Feeds.css";

function Feeds() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPosts() {
      const results = await HttpService.get("/posts");
      console.log(results);
    }
    getPosts();
  }, []);
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
