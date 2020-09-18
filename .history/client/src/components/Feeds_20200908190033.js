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

        setPosts(result.data);
      } catch (e) {
        setPosts(null);
      }
    }
    getPosts();
  }, []);

  const savePost = async (data) => {
    const params = {};
    try {
      const response = await HttpService.post("/create/post");
    } catch (e) {
      console.log(e);
    }
    console.log(data, "sdsd");
  };

  return (
    <div className="feeds">
      <StartPost savePost={savePost} />
      <div className="feed__Post">
        {posts &&
          posts.data.map((post) => {
            return <Post text={post.text} />;
          })}
      </div>
    </div>
  );
}

export default Feeds;
