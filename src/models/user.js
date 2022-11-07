const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

// Mongoose - ORM : Model/Design database in code here we have the user
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
});

// This function encrypt the password with 10 hash repetitions
UserSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// This function compare/validate passwords
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password); // Return boolean
};

// The way we create the user's collection
module.exports = mongoose.model('users', UserSchema);