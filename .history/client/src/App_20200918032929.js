import React, { useEffect, useState } from "react";
import HttpService from "../HttpService";
import Header from "./components/Header";
import Sidebar from "./components/HomeSidebar";
import Feeds from "./components/Feeds";
import "./App.css";

function App({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const result = await HttpService.get("post");

        setPosts(result.data.data);
      } catch (e) {
        setPosts(null);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feeds posts={posts} savePostsHandler={savePost} />
      </div>
    </div>
  );
}

export default App;
