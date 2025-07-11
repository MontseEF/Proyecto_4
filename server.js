const express = require('express');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/booking-routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/reservas', bookingRoutes);

app.get('/', (req, res) => {
  res.send('API de Reservas funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
