import React, { useEffect, useState } from "react";
import { useStatevalue } from "./Context/StateProvider";
import { actionTypes } from "./Context/reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpService from "./HttpService";
import Home from "./Home";
import Header from "./components/Header";
import "./App.css";

function App({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />

      <Home />
    </div>
  );
}

export default App;
