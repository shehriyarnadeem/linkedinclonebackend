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
      try {
        const result = await HttpService.get("/posts");
        console.log(result, "tttt");

        setPosts(result.data);
      } catch (e) {
        setPosts(null);
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
