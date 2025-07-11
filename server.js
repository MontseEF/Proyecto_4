const express = require('express');
const dotenv = require('dotenv');

// Cargar configuración desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
