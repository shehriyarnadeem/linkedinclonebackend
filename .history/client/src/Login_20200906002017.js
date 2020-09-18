import React, { useState } from "react";
import logo from "./assets/img/logo1.png";
import "./Login.css";
import HttpService from "./HttpService";
import { useStatevalue } from "./Context/StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./Context/reducer";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user,]
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const params = {
      email: email,
      password: password,
    };

    try {
      const result = await HttpService.post("login", params);
    } catch (e) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <h1> Welcome back</h1>
        <p>
          Don't miss your next opportunity, Sign in to stay updated on your
          proffessional world
        </p>

        <form onSubmit={handleSubmit}>
          <div className="login__container_input">
            <input
              value={email}
              placeholder="Email or Phone"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__container_sigin">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
