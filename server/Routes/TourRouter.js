const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware'); 
const { createTour, 
        getAllTours, 
        getTourById, 
        updateTour, 
        deleteTour } = require('../controllers/TourController');

// Route for creating a new tour
router.post('/tours', authMiddleware, createTour);

// Route for getting all tours
router.get('/tours', authMiddleware, getAllTours);

// Route for getting a single tour by ID
router.get('/tours/:id', authMiddleware, getTourById);

// Route for updating a tour by ID
router.put('/tours/:id', authMiddleware, updateTour);

// Route for deleting a tour by ID
router.delete('/tours/:id', authMiddleware, deleteTour);

module.exports = router;
