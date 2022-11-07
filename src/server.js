const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const connect_flash = require('connect-flash');

// Initializations
const app = express();
require('./database');
require('./passport/local-auth');

// Settings
app.set('views', path.join(__dirname, 'views')); // We use src directory so needed path methods to find 
// other files, with _dirname we get user, desktop and the complete path to be useful in any computer/system
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000); // process.env.PORT is establish because when we deploy we maybe get a new port

// Middlewares - These are functions that are executed before the routes (process)
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(connect_flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user; // Here we have an available user to be used in the app (Current user)
    console.log(app.locals)
    next();
});


// Routes
app.use('/', require('./routes/auth')); // This is needed to show the pages

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});