import React from 'react';

const SingUp = () => {
    return (
        <div class="card-color mx-auto col-md-3 w-50 mt-5 ">
        <h2 class="text-center p-3 head-color">Sing Up Account</h2>
        <form class="w-75 mx-auto p-3">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Your Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby=""
              placeholder="Enter Your Name"
            />
          </div>
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
          
        </form>
        <div class="row text-center pb-4 mx-auto gap-3">
          <div class="col-md-5">
            <button
              type="submit"
              class="login-btn rounded-3 w-50 d-block ms-auto"
            >
              Sing Up
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingUp;