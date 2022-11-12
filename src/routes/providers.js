const express = require('express')
const router = express.Router()

const providerController = require('../controllers/providerController')

// Show all products
router.get('/providers', isAuthenticated, providerController.show)
// Create products
router.post('/createProvider', isAuthenticated, providerController.create) 
// Update products
router.post('/updateProvider', isAuthenticated, providerController.update)
// Delete products
router.get('/deleteProvider/:id', isAuthenticated, providerController.delete)

// Function to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router