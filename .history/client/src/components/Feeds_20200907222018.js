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
      try {
        const result = await HttpService.get("posts");
        console.log(result);
        setPosts(result.data);
        setLoading(false);
      } catch (e) {
        setPosts(null);
        setLoading(false);
      }
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
