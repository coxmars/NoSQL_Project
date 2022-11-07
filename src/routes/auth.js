const express = require('express')
const router = express.Router(); // This is to establish the routes we are going to use
const passport = require('passport');

// Establish routes 
// First page user will see
router.get('/', (req,res,next) => {
    res.render('index'); // Render the index file using the path in views we establish before
});

// Show the signup page
router.get('/signup', (req,res,next) => {
    res.render('signup');
});

// Process data in signup page (create user)
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

// Show the signin page
router.get('/signin', (req,res,next) => {
    res.render('signin');
});

// Auth data in signin page (validate user)
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

// Show the profile page
router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});

// Logout page
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});
  
// Function to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}


module.exports = router; // This is to be used in other files

