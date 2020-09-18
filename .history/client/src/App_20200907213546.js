import React, { useEffect } from "react";
import ContentLayout from "./components/ContentLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./components/Header";
import { useStatevalue } from "./Context/StateProvider";
import { useHistory } from "react-router-dom";

import "./App.css";

function App({ children }) {
  const [{ user }, dispatch] = useStatevalue();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function checkAuth() {
      try {
        const result = await HttpService.get("/authUser");

        dispatch({ type: actionTypes.SET_USER, user: result.data.data });
        setLoading(false);
      } catch (e) {
        console.log(e, "sdsd");
      }
    }

    checkAuth();
  }, []);

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
    <div className="App">
    {loading ? (
      <div className="loading">{isLoading()}</div>
    ) : (
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header user={user} />
            <ContentLayout>
              <Switch>
                <Route path="/dashboard">
                  <Home />
                </Route>
              </Switch>
            </ContentLayout>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
