const express = require('express')
const router = express.Router()

router.get('/dashboard', isAuthenticated, (req,res,next) => {
    res.render('dashboard'); // Render the index file using the path in views we establish before
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = router;