const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, getBookingById, updateBooking } = require('../controllers/booking-controllers');

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking); 


module.exports = router;
