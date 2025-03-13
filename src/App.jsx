import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register"; 
import ForgotPassword from "./components/ForgotPassword"; 
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PlayersPage from "./pages/PlayersPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
}

function AppContent({ user, setUser }) {
  const location = useLocation();
  const hideCircle = location.pathname === "/players"; 

  return (
    <>
      <Navbar user={user} onLogout={() => setUser(null)} />
      {!hideCircle && <div className="animated-circle"></div>}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/players" element={<PlayersPage />} />
          {user && <Route path="/welcome" element={<Welcome username={user} onLogout={() => setUser(null)} />} />}
        </Routes>
      </div>
    </>
  );
}

export default App;
