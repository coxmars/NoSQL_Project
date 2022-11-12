const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

// Show all products
router.get('/products', isAuthenticated, productController.show)
// Create products
router.post('/create', isAuthenticated, productController.create) 
// Update products
router.post('/update', isAuthenticated, productController.update)
// Delete products
router.get('/delete/:id', isAuthenticated, productController.delete)

// Function to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router