import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Players() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerId, setPlayerId] = useState(1); // ✅ Estado para almacenar el ID del jugador

  const fetchPlayer = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.balldontlie.io/v1/players/${id}`, {
        headers: {
          Authorization: "d90d68d9-37d7-451b-84f9-8189562673b8"
        }
      });

      setPlayer(response.data.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setError("Hubo un problema al obtener los datos del jugador.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayer(playerId);
  }, [playerId]); // ✅ Se actualiza cada vez que cambia el ID

  const handleRandomPlayer = () => {
    const randomId = Math.floor(Math.random() * 100) + 1; // 🔥 Genera un ID entre 1 y 100
    setPlayerId(randomId);
  };

  return (
    <div className="players-container">
      <h2>Información del Jugador</h2>
      {loading ? (
        <p>Cargando datos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="player-card">
          <h3>{player.first_name} {player.last_name}</h3>
          <p><strong>Equipo:</strong> {player.team?.full_name || "Sin equipo"}</p>
          <p><strong>Posición:</strong> {player.position || "No disponible"}</p>
          <p><strong>Altura:</strong> {player.height || "No disponible"}</p>
          <p><strong>Peso:</strong> {player.weight ? `${player.weight} lbs` : "No disponible"}</p>
          <p><strong>Jersey:</strong> {player.jersey_number || "No disponible"}</p>
          <p><strong>Universidad:</strong> {player.college || "No disponible"}</p>
          <p><strong>País:</strong> {player.country || "No disponible"}</p>
          <p><strong>Año de Draft:</strong> {player.draft_year || "No disponible"}</p>
          <p><strong>Ronda de Draft:</strong> {player.draft_round || "No disponible"}</p>
          <p><strong>Número de Draft:</strong> {player.draft_number || "No disponible"}</p>
        </div>
      )}
      <button className="random-btn" onClick={handleRandomPlayer}>Jugador Aleatorio</button>
    </div>
  );
}

export default Players;
