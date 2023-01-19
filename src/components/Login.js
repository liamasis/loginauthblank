import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(data);
      setUser(data);
    } catch {
      setError(true);
    }
  };
  return (
    <div className="constainer">
      <span className="user-name">{user.name}</span>
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
          Login
        </button>
        <span
          data-testid={"error"}
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};
export default Login;
