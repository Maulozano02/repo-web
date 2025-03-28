import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Credenciales válidas (hardcodeadas)
  const validUsername = "admin";
  const validPassword = "123456";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5055/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password }),
    });
  
    const data = await res.json();
    if (res.ok) {
      onLogin(username);
      navigate("/");
    } else {
      alert(data.error);
    }
  };
  

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Correo"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
