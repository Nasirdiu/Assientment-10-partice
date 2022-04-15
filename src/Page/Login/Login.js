import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleFrom = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form" onSubmit={handleFrom}>
        <input type="text" placeholder="Your Email" onChange={handleEmail} />

        <input
          type="password"
          placeholder="password"
          onChange={handlePassword}
        />

        <button>Login</button>

        {/* {error && <p className="error-message">{error}</p> } */}
        {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}

        <p>
          Don't have an account? <Link to="/singup">Sign up first</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
