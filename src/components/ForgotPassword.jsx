import { useState } from "react";
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Se ha enviado un enlace de recuperación a: ${email}`);
  };

  return (
    <div className="login-box">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar Enlace</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
