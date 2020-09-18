import React from "react";
import HomeSidebar from "./components/HomeSidebar";
import Feeds from "./components/Feeds";
import "./Home.css";
function Home() {
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
