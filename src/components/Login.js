import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {}
  };
  return (
    <div className="constainer">
      <h1>{user ? user.name : ""}</h1>
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
        <button disabled={!password || !username} onClick={handleClick}>
          {loading ? "Loading" : "Login"}
        </button>
        <span style={{ visibility: error ? "visible" : "hidden" }}>
          There has been a mistake
        </span>
      </form>
    </div>
  );
};
export default Login;
