import "../App.css";

function Welcome({ username, onLogout }) {
  return (
    <div className="login-box">
      <h2>Bienvenido, {username}!</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Welcome;
