import React, {useState} from "react";
import axios from "axios"

const Login = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user,setUser] = useState({})
  const clickChange = async (e) = {
    e.preventDefault()
    
  }
  
  return (
    <div className="constainer">
      <form action="">
        <input type="text" />
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
