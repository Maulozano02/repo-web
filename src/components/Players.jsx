import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Players() {
  const [players, setPlayers] = useState([]); // 🔥 Lista completa de jugadores
  const [currentPage, setCurrentPage] = useState(1); // 🔥 Página actual del paginador
  const [search, setSearch] = useState(""); // 🔥 Estado del buscador
  const playersPerPage = 5; // 🔥 Número de jugadores por página

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("https://api.balldontlie.io/v1/players", {
          headers: {
            Authorization: "d90d68d9-37d7-451b-84f9-8189562673b8"
          },
          params: {
            per_page: 30, // 🔥 Traer de 20 a 30 jugadores
            page: 1,
          }
        });
        setPlayers(response.data.data);
      } catch (error) {
        console.error("Error al obtener los jugadores:", error);
      }
    };

    fetchPlayers();
  }, []);

  // 🔥 Filtrar jugadores con el buscador
  const filteredPlayers = players.filter(player =>
    `${player.first_name} ${player.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Obtener jugadores para la página actual
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

  // 🔥 Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="players-container">
      <h2>Lista de Jugadores</h2>

      {/* 🔍 Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar jugador..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* 📋 Lista de jugadores */}
      <ul className="players-list">
        {currentPlayers.length === 0 ? (
          <p>No se encontraron jugadores.</p>
        ) : (
          currentPlayers.map((player) => (
            <li key={player.id}>
              <strong>{player.first_name} {player.last_name}</strong> <br />
              Equipo: {player.team?.full_name || "Sin equipo"} <br />
              Posición: {player.position || "No disponible"} <br />
            </li>
          ))
        )}
      </ul>

      {/* 🔀 Paginador */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredPlayers.length / playersPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? "active" : ""}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Players;
