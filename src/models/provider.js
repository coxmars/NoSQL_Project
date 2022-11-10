const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    }
})
module.exports = mongoose.model('Provider', ProviderSchema)