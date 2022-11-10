const Product = require('../models/product')

// Show
module.exports.show = (req, res)=>{
    Product.find({}, (error, products)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error showing products'
            })
        }
        return res.render('product', {products: products})
    })
}

// Create
module.exports.create = (req, res)=>{
    //console.log(req.body)
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    })
    product.save(function(error,product){
        if(error){
            return res.status(500).json({
                message: 'Error creating product'
            })
        }
        res.redirect('/products')
    })
}

// Update
module.exports.update = (req,res)=>{
    const id = req.body.id_update
    const name = req.body.name_update
    const description = req.body.description_update
    const price = req.body.price_update
    const quantity = req.body.quantity_update
    Product.findByIdAndUpdate(id, {name,description,price,quantity}, (error, product)=>{
        if(error){
            return res.status(500).json({
                message: 'Error updating product'
            })
        }
        res.redirect('/products')
    })
}

// Delete
module.exports.delete = (req, res)=>{
    const id = req.params.id
    Product.findByIdAndRemove(id, (error, product)=>{
        if(error){
            return res.status(500).json({
                message: 'Error deleting product'
            })
        }
        res.redirect('/products')
    })
}