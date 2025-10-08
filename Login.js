import { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../Login.css";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) return alert("Enter username");
    setUser({ username });
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <p style={{ marginTop: "15px" }}>
        Don't have an account? <Link to="/Signup">Sign up here</Link>
      </p>
    </div>
  );
}