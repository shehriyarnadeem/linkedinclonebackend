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
      setLoading(true);
      const result = await HttpService.get("/posts");

      setPosts(result.data);
      setLoading(false);
    }
    getPosts();
  }, []);

  console.log(posts, "posts");
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
