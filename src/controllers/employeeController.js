const Employee = require('../models/employee')

// Show
module.exports.show = (req, res)=>{
    Employee.find({}, (error, employees)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error showing employees'
            })
        }
        return res.render('employee', {employees: employees})
    })
}

// Create
module.exports.create = (req, res)=>{
    //console.log(req.body)
    const employee = new Employee ({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        job: req.body.job
    })
    employee.save(function(error,employee){
        if(error){
            return res.status(500).json({
                message: 'Error creating employee'
            })
        }
        res.redirect('/employees')
    })
}

// Update
module.exports.update = (req,res)=>{
    const id = req.body.id_update
    const name = req.body.name_update
    const email = req.body.email_update
    const phoneNumber = req.body.phoneNumber_update
    const job = req.body.job_update
    Employee.findByIdAndUpdate(id, {name,email,phoneNumber,job}, (error, employee)=>{
        if(error){
            return res.status(500).json({
                message: 'Error updating employee'
            })
        }
        res.redirect('/employees')
    })
}

// Delete
module.exports.delete = (req, res)=>{
    const id = req.params.id
    Employee.findByIdAndRemove(id, (error, employee)=>{
        if(error){
            return res.status(500).json({
                message: 'Error deleting employee'
            })
        }
        res.redirect('/employees')
    })
}


