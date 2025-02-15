import "../App.css";

function Welcome({ username, onLogout }) {
  return (
    <div className="login-box">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Sign Out</button>
    </div>
  );
}

export default Welcome;
