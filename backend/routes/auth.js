const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// REGISTRO
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, email, password: hash });
    res.json({ message: 'Usuario creado', user });
  } catch (err) {
    res.status(400).json({ error: 'Ya existe un usuario con ese correo' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'No encontrado' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  res.json({ message: 'Login exitoso', token });
});

// RECUPERAR CONTRASEÑA
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
  const url = `http://localhost:3000/reset-password/${token}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  router.post('/reset-password', async (req, res) => {
    const { token, password } = req.body;
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const hash = await bcrypt.hash(password, 10);
  
      await User.findByIdAndUpdate(decoded.id, { password: hash });
  
      res.json({ message: "Contraseña actualizada correctamente" });
    } catch (err) {
      res.status(400).json({ error: "Token inválido o expirado" });
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Recuperación de contraseña",
    html: `<p>Haz clic aquí para recuperar tu contraseña:</p><a href="${url}">${url}</a>`,
  });

  res.json({ message: 'Correo enviado' });
  
});

module.exports = router;
