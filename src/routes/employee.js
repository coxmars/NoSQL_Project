const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employeeController')

// Show all products
router.get('/employees', isAuthenticated, employeeController.show)
// Create products
router.post('/createEmployee', isAuthenticated, employeeController.create) 
// Update products
router.post('/updateEmployee', isAuthenticated, employeeController.update)
// Delete products
router.get('/deleteEmployee/:id', isAuthenticated, employeeController.delete)

// Function to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router