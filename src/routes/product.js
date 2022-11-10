const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

// Show all products
router.get('/products', productController.show)
// Create products
router.post('/create', productController.create) 
// Update products
router.post('/update', productController.update)
// Delete products
router.get('/delete/:id', productController.delete)
module.exports = router