import React, { useState } from "react";


const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  return (
    <div className="constainer">
      <form action="">
        <h1>username</h1>
        <input type="text" placeholder="username" />
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
