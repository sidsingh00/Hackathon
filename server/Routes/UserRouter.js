const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware'); 
const { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser, 
    loginUser 
} = require('../controllers/UserController');

// Route for creating a new user
router.post('/users', authMiddleware, createUser);

// Route for getting all users
router.get('/users', authMiddleware, getAllUsers);

// Route for getting a single user by ID
router.get('/users/:id', authMiddleware, getUserById);

// Route for updating a user by ID
router.put('/users/:id', authMiddleware, updateUser);

// Route for deleting a user by ID
router.delete('/users/:id', authMiddleware, deleteUser);

// Route for logging in a user
router.post('/users/login', loginUser);

module.exports = router;
