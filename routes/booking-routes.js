const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../controllers/booking-controllers');

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);


module.exports = router;
