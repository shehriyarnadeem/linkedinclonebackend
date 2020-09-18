import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import "./Feeds.css";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPosts() {
      try {
        const result = await HttpService.get("/posts");

        setPosts(result.data.data);
      } catch (e) {
        setPosts(null);
      }
    }
    getPosts();
  }, []);

  const savePost = async (data) => {
    const allPosts = [...posts];
    const params = {
      text: data,
    };

    try {
      const response = await HttpService.post("/create/post", params);
      // allPosts.push(response.data)
      console.log(response, "response");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="feeds">
      <StartPost savePost={savePost} />
      <div className="feed__Post">
        {/* {posts &&
          posts.data.map((post) => {
            return <Post text={post.text} />;
          })} */}
      </div>
    </div>
  );
}

export default Feeds;
