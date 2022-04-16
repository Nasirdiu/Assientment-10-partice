import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    other: "",
  });
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleerror] =
    useSignInWithGoogle(auth);

  const handleEmail = (event) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (event) => {
    const passRegx = /.{6,}/;
    const validPass = passRegx.test(event.target.value);
    if (validPass) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleFrom = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  useEffect(() => {
    if (hookError) {
      toast(hookError?.message);
    }
  }, [hookError]);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  return (
    <div className="login-container">
      <div className="login-title">Login</div>
      <form className="login-form" onSubmit={handleFrom}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          onChange={handleEmail}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePassword}
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}

        <button>Login</button>
        <button onClick={() => signInWithGoogle()}>Google</button>

        {/* {error && <p className="error-message">{error}</p> } */}
        {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}

        <p>
          Don't have an account? <Link to="/singup">Sign up first</Link>{" "}
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
