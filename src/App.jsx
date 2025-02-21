import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} onLogout={() => setUser(null)} />
      <div className="animated-circle"></div> {/* Círculo animado arriba */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          {user && <Route path="/welcome" element={<Welcome username={user} onLogout={() => setUser(null)} />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
