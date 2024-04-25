const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware'); 
const { 
    createDestination, 
    getAllDestinations, 
    getDestinationById, 
    updateDestination, 
    deleteDestination 
} = require('../controllers/DestinationController');

// Route for creating a new destination
router.post('/destinations', authMiddleware, createDestination);

// Route for getting all destinations
router.get('/destinations', authMiddleware, getAllDestinations);

// Route for getting a single destination by ID
router.get('/destinations/:id', authMiddleware, getDestinationById);

// Route for updating a destination by ID
router.put('/destinations/:id', authMiddleware, updateDestination);

// Route for deleting a destination by ID
router.delete('/destinations/:id', authMiddleware, deleteDestination);

module.exports = router;

