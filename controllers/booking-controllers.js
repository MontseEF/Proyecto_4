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

module.exports = {
  createBooking
};
