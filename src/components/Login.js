import { useState } from "react";
import React from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUsername(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
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
        <button disabled={!password || !username} onClick={handleClick}>
          {loading ? "Loading" : "Login"}
        </button>
      </form>
      <span
        testdata-id="errormsg"
        style={{ visibility: error ? "false" : "true" }}
      >
        There has been an error
      </span>
    </div>
  );
};
export default Login;
