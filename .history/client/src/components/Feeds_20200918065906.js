import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const pusher = new Pusher("89571dc3bb0b3e616bcb", {
    cluster: "ap2",
    encrypted: true,
  });

  const channel = pusher.subscribe("post-channel");
  channel.bind("post-create", (data) => {
    console.log(data, "pusher data");
    // setPosts(data)
  });

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const result = await HttpService.get("post");
        console.log(result);

        setPosts(result.data.data);
        setLoading(false);
      } catch (e) {
        setPosts(null);
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  console.log(posts);

  const savePost = async (data) => {
    const allPosts = [...posts];
    const params = {
      text: data,
    };

    try {
      const response = await HttpService.post("post", params);

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
