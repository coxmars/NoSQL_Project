const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

// Show all products
router.get('/users', isAuthenticated, userController.show)
// Create products
router.post('/createUser', isAuthenticated, userController.create) 
// Update products
router.post('/updateUser', isAuthenticated, userController.update)
// Delete products
router.get('/deleteUser/:id', isAuthenticated, userController.delete)

// Function to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router