import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./components/Header";
import Sidebar from "./components/HomeSidebar";
import Feeds from "./components/Feeds";
import "./App.css";

function App({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feeds />
      </div>
    </div>
  );
}

export default App;
