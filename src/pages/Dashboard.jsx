import { Navigate } from "react-router-dom";

function Dashboard({ user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido al área protegida.</p>
    </div>
  );
}

export default Dashboard;
