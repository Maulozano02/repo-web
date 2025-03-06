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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      onLogin(username);
      navigate("/"); // ✅ Redirigir al Home después del login
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
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
