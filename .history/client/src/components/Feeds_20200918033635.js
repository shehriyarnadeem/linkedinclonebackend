import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const result = await HttpService.get("post");

        setPosts(result.data.data);
        setLoading(false);
      } catch (e) {
        setPosts(null);
        setLoading(false);
      }
    }
    getPosts();
  }, [posts, loading]);

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
