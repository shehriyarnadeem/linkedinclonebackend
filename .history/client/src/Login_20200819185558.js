import React, { useState } from "react";
import logo from "./assets/img/logo1.png";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("sd");
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

        <form>
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
