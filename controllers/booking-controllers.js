const fs = require('fs');
const path = require('path');
const bookingPath = path.join(__dirname, '../data/booking.json');

function readBookings() {
  const data = fs.readFileSync(bookingPath);
  return JSON.parse(data);
}

function saveBooking(bookings) {
  fs.writeFileSync(bookingPath, JSON.stringify(bookings, null, 2));
} 
console.log('Archivo de reservas cargado correctamente');

function createBooking(req, res) {
  const bookings = readBookings();
  const newBooking = {
    id: Date.now(),
    ...req.body
  };
  console.log('Nueva reserva recibida:', newBooking); 

  bookings.push(newBooking);
  saveBooking(bookings);

  res.status(201).json(newBooking);
}

function getAllBookings(req, res) {
  const bookings = readBookings(); 
  res.status(200).json(bookings);
}
console.log('Todas las reservas obtenidas correctamente');
function getBookingById(req, res) {
  const bookings = readBookings();
  const id = Number(req.params.id);

  const booking = bookings.find(b => b.id === id);

  if (!booking) {
    return res.status(404).json({ message: "Reserva no encontrada" });
  }

  res.status(200).json(booking);
}
console.log('Reserva obtenida correctamente con ID:', req.params.id);

function updateBooking(req, res) {
  const bookings = readBookings();
  const id = Number(req.params.id);

  const index = bookings.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Reserva no encontrada' });
  }
  console.log('Actualizando reserva con ID:', id);

  const updatedBooking = {
    ...bookings[index],    
    ...req.body            
  };

  bookings[index] = updatedBooking;
  saveBooking(bookings);

  res.status(200).json(updateBooking);
}

module.exports = {
  createBooking,
  getAllBookings, 
  getBookingById, 
  updateBooking
};
