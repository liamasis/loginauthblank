import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const clickChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div className="constainer">
      <span>{user.name}</span>
      <form action="">
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!username || !password} onClick={clickChange}>
          {loading ? "please wait" : "Log in"}
        </button>
        <span
          data-testid="error-span"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          There is an error
        </span>
      </form>
    </div>
  );
};
export default Login;
