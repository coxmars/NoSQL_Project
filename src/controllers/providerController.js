const Provider = require('../models/provider')

// Show
module.exports.show = (req, res)=>{
    Provider.find({}, (error, providers)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error showing providers'
            })
        }
        return res.render('provider', {providers: providers})
    })
}

// Create
module.exports.create = (req, res)=>{
    //console.log(req.body)
    const provider = new Provider ({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location
    })
    provider.save(function(error,provider){
        if(error){
            return res.status(500).json({
                message: 'Error creating provider'
            })
        }
        res.redirect('/providers')
    })
}

// Update
module.exports.update = (req,res)=>{
    const id = req.body.id_update
    const name = req.body.name_update
    const phoneNumber = req.body.phoneNumber_update
    const location = req.body.location_update
    Provider.findByIdAndUpdate(id, {name,phoneNumber,location}, (error, provider)=>{
        if(error){
            return res.status(500).json({
                message: 'Error updating provider'
            })
        }
        res.redirect('/providers')
    })
}

// Delete
module.exports.delete = (req, res)=>{
    const id = req.params.id
    Provider.findByIdAndRemove(id, (error, provider)=>{
        if(error){
            return res.status(500).json({
                message: 'Error deleting provider'
            })
        }
        res.redirect('/providers')
    })
}


