import { useState } from "react";
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("http://localhost:5055/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      alert("Correo de recuperación enviado");
    } else {
      alert(data.error || "Error al enviar el correo");
    }
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
