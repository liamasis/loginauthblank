import React, { useState } from "react";


const Login = () => {

  return (
    <div className="constainer">
      <form action="">
        <h1>username</h1>
        <input type="text" placeholder="username" value="" />
        <input type="password" placeholder="password" />
        <button disabled="true">Login</button>
      </form>
    </div>
  );
};
export default Login;
