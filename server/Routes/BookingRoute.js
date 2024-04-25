const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware'); // Assuming you have middleware for admin verification
const { 
  createBooking, 
  getAllBookings, 
  getBookingById, 
  updateBooking, 
  deleteBooking 
} = require('../controllers/BookingController');

// Booking Routes

// Create a new booking
router.post('/bookings', authMiddleware, createBooking);

// Get all bookings
router.get('/bookings', getAllBookings);

// Get a single booking by ID
router.get('/bookings/:id', getBookingById);

// Update a booking by ID
router.put('/bookings/:id', authMiddleware, updateBooking);

// Delete a booking by ID
router.delete('/bookings/:id', authMiddleware, deleteBooking);

module.exports = router;