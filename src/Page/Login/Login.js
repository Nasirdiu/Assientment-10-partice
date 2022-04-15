import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div class="card-color mx-auto col-md-3 w-50 mt-5 ">
      <h2 class="text-center p-3 head-color">Login Account</h2>
      <form class="w-75 mx-auto p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <div class="mb-3 form-check">
          <label class="form-check-label" for="exampleCheck1">
            Forget Password
          </label>
        </div>
      </form>
      <div class="row text-center pb-4 mx-auto gap-3">
        <div class="col-md-5">
          <button
            type="submit"
            class="login-btn rounded-3 w-75 d-block ms-auto "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
