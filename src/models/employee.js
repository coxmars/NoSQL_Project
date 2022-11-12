const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
    },
    job: {
        type: String,
        required: [true, "Job is required"],
    }
})
module.exports = mongoose.model('Employee', EmployeeSchema)