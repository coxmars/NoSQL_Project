const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

// This method receives an user 
passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    // Validate users
    const validateUser = await User.findOne({ email: email })  // MongoDB query
    if (validateUser) {
        return done(null, false, req.flash('signupMessage', 'Email is already used'));
    }
    else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));


passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user = await User.findOne({email: email}); // MongoDB query
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'User not found'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Incorrect password'));
    }
    return done(null, user);
}));