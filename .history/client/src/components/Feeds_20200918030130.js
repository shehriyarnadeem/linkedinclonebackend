import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  Pusher.logToConsole = true;

  useEffect(() => {
    console.log("new post was created");
    async function getPosts() {
      try {
        const result = await HttpService.get("/posts");

        setPosts(result.data.data);
      } catch (e) {
        setPosts(null);
      }
    }
    getPosts();
  }, [posts]);

  new Pusher("89571dc3bb0b3e616bcb", {
    cluster: "ap2",
    encrypted: true,
  });

  const channel = pusher.subscribe("post-channel");
  channel.bind("post-create", (data) => {
    console.log(data, "data");
    setPosts(data);
  });

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
