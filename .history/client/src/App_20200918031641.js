import React, { useEffect, useState } from "react";
import { useStatevalue } from "./Context/StateProvider";
import { actionTypes } from "./Context/reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpService from "./HttpService";
import Home from "./Home";
import Header from "./components/Header";
import 
import "./App.css";

function App({ children }) {
  const [posts setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function checkAuth() {
      try {
        const result = await HttpService.get("authUser");
        dispatch({ type: actionTypes.SET_USER, user: result.data.data });
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
