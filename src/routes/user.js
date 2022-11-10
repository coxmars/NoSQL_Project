const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

// Show all products
router.get('/users', userController.show)
// Create products
router.post('/create', userController.create) 
// Update products
router.post('/update', userController.update)
// Delete products
router.get('/delete/:id', userController.delete)
module.exports = router