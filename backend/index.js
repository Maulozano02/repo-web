require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// 📍 Aquí conectas tus rutas
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes); // Todas las rutas de auth estarán en /api/*

// Servidor
const PORT = process.env.PORT || 5055;
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
