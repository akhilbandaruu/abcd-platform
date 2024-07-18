// src/Login.js
import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../../assets/logos/badge-abcd-logo.svg";
// import SocialCommunities from "../sidebar/social-communities/Social-communities";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const response = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setError(result.message);
    if (result.success) {
      localStorage.setItem("token", result.token);
      window.location.replace("/");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="logo badge-abcd-logo">
          <img src={logo} alt="ABCD Logo" />
        </div>
        <h1>Welcome Back</h1>
        <p>For secure access to your account, please enter your credentials.</p>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="formlink-below">
          <ul className="formlinks">
            <li>
              <a href="/register" className="orange-link">
                Create Account
              </a>
            </li>
            <li>
              <a href="/" className="orange-link">
                Forget Password?
              </a>
            </li>
          </ul>
        </div>
        <div className="social-login">
          <div className="or-divider">
            <ul className="or-divider-listitems">
              <li className="or-divider-listitem">
                <hr />
              </li>
              <li className="or-divider-listitem">
                <span className="or-divider-line">OR</span>
              </li>
              <li className="or-divider-listitem">
                <hr />
              </li>
            </ul>
          </div>
          {/* <SocialCommunities /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
