import React, { useEffect, useState } from "react";
import ContentLayout from "./components/ContentLayout";
import { useStatevalue } from "./Context/StateProvider";
import { actionTypes } from "./Context/reducer";
import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpService from "./HttpService";
import Login from "./Login";
import Home from "./Home";
import Header from "./components/Header";
import "./App.css";

function App({ children }) {
  const [{ user }, dispatch] = useStatevalue();
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
        <ContentLayout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentLayout>
      </Router>
    </div>
  );
}

export default App;
