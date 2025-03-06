import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PlayersPage from "./pages/PlayersPage"; // Página con la API
import "./App.css";

// Componente para el círculo animado
function AnimatedCircle() {
  const location = useLocation();
  // Mostrar el círculo solo cuando no estemos en la página de "Players"
  return location.pathname !== "/players" ? (
    <div className="animated-circle"></div>
  ) : null;
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} onLogout={() => setUser(null)} />
      <AnimatedCircle /> {/* 🔥 Solo se muestra si no estamos en "/players" */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/players" element={<PlayersPage />} />
          {user && <Route path="/welcome" element={<Welcome username={user} onLogout={() => setUser(null)} />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
