import React, { useEffect } from "react";
import HttpService from "./HttpService";
import HomeSidebar from "./components/HomeSidebar";
import Feeds from "./components/Feeds";
import "./Home.css";
function Home() {
  useEffect(() => {
    async function getPosts() {
      try {
        const result = await HttpService.get("/posts");
        console.log(result, "123");
        // setPosts(result.data);
      } catch (e) {
        // setPosts(null);
      }
    }
    getPosts();
  });
  return (
    <>
      <div className="home">
        <HomeSidebar />
        <Feeds />
      </div>
    </>
  );
}

export default Home;
