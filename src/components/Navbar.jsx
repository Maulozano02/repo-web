import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/players">Jugadores NBA</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={onLogout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrarse</Link> {/* ✅ Ahora se ve en el Navbar */}
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link> {/* ✅ Ahora se ve en el Navbar */}
        </>
      )}
    </nav>
  );
}

export default Navbar;
