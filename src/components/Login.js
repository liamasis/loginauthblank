import React from "react";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  return (
    <div className="constainer">
      <form action="">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!password || !username}>Login</button>
        <span style={{ visibility: error ? "visible" : "hidden" }}>
          There has been a mistake
        </span>
      </form>
    </div>
  );
};
export default Login;
