import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import StartPost from "./StartPost";
import Post from "./Post";
import Pusher from "pusher-js";
import "./Feeds.css";
import Loader from "react-loader-spinner";

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
  }, []);

  const pusher = new Pusher("89571dc3bb0b3e616bcb", {
    cluster: "ap2",
    encrypted: true,
  });

  const channel = pusher.subscribe("post-channel");
  channel.bind("post-create", (data) => {
    setLoading(true);
    const allPost = [...posts];
    allPost.unshift(data.data);
    setPosts(allPost);
    setLoading(false);
  });

  const savePost = async (data) => {
    const allPosts = [...posts];
    const params = {
      text: data,
    };
    try {
      const response = await HttpService.post("post", params);
    } catch (e) {
      console.log(e);
    }
  };

  const isLoading = () => {
    return (
      <Loader
        type="Oval"
        color="gray"
        height={100}
        width={100}
        svgClass="my-custom-class"
      />
    );
  };

  return (
    <div className="feeds">
      <StartPost savePost={savePost} />
      <div className="feed__Post">
      {loading ? (
        <div className="loading">{isLoading()}</div>
      ) : (
        posts &&
          posts.map((post) => 
             <Post text={post.text} />;
          )
      </div>
    </div>
  );
}

export default Feeds;
