const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware'); 
const {
  createBookingAddOn,
  getAllBookingAddOns,
  getBookingAddOnById,
  updateBookingAddOn,
  deleteBookingAddOn
} = require('../controllers/bookingAddOnController');

// Route for creating a new booking add-on
router.post('/booking-addons', authMiddleware, createBookingAddOn);

// Route for getting all booking add-ons
router.get('/booking-addons', authMiddleware, getAllBookingAddOns);

// Route for getting a single booking add-on by ID
router.get('/booking-addons/:id', authMiddleware, getBookingAddOnById);

// Route for updating a booking add-on by ID
router.put('/booking-addons/:id', authMiddleware, updateBookingAddOn);

// Route for deleting a booking add-on by ID
router.delete('/booking-addons/:id', authMiddleware, deleteBookingAddOn);

module.exports = router;

