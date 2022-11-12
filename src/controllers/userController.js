const User = require('../models/user')

// Show
module.exports.show = (req, res)=>{
    User.find({}, (error, users)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error showing users'
            })
        }
        return res.render('user', {users: users})
    })
}

// Create
module.exports.create = (req, res)=>{
    //console.log(req.body)
    // Here is the error maybe the name because is the same "user" : before initialization
    const user = new User({
        email: req.body.email,
        password: user.encryptPassword(req.body.password)
    })
    user.save(function(error,user){
        if(error){
            return res.status(500).json({
                message: 'Error creating user'
            })
        }
        res.redirect('/users')
    })
}

// Update
module.exports.update = (req,res)=>{
    const id = req.body.id_update
    const email = req.body.email_update
    const password = req.body.password_update
    User.findByIdAndUpdate(id, {email,password}, (error, user)=>{
        if(error){
            return res.status(500).json({
                message: 'Error updating user'
            })
        }
        res.redirect('/users')
    })
}

// Delete
module.exports.delete = (req, res)=>{
    const id = req.params.id
    User.findByIdAndRemove(id, (error, user)=>{
        if(error){
            return res.status(500).json({
                message: 'Error deleting user'
            })
        }
        res.redirect('/users')
    })
}


