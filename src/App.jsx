import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
    <div className="animated-circle"></div> {/* Círculo animado arriba */}
    <div className="container">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Welcome username={user} onLogout={() => setUser(null)} />
      )}
    </div>
    </>
  );
}

export default App;
