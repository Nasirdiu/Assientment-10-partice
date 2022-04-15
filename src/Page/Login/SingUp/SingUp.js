import React from "react";

const SingUp = () => {
  return (
    <div className="login-container">
      <div className="login-title">Sign up</div>
      <form className="login-form">
        <input type="text" placeholder="Your Email" />

        <div className="relative">
          <input type="text" placeholder="password" />
        </div>
        <input type="password" placeholder="confirm password" />

        <button>Sign up</button>

        {/* {error && <p className="error-message">{error}</p> } */}
        {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
      </form>
    </div>
  );
};

export default SingUp;
