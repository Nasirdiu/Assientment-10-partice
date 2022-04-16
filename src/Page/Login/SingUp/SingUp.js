import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SingUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    other: "",
  });
  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
  const handleConfirmPassword = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password Don't Match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };
  const handleFrom = (event) => {
    event.preventDefault();
    console.log(userInfo);
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
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
      <div className="login-title">Sing Up</div>
      <form className="login-form" onSubmit={handleFrom}>
        <input type="text" name="name" placeholder="Your Name" />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          onChange={handleEmail}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={handlePassword}
          />
          {errors?.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <p
            className="absolute top-0 right-0"
            onClick={() => setShowPass(!showPass)}
          >
            🔥
          </p>
        </div>

        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Confirm password"
          onChange={handleConfirmPassword}
        />

        <button>Sing Up</button>

        {/* {error && <p className="error-message">{error}</p> } */}
        {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
