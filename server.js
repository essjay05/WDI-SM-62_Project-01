// REQUIRE DOTENV DATABASE CONNECTION
// require('dotenv').config();

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    axios = require('axios'),
    ejsLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    passport = require('passport'),
    passportConfig = require('./services/auth'),
    // path = require('path'),
    usersRouter = require('./routes/usersRouter.js'),
    hikesRouter = require('./routes/hikesRouter.js'),
    methodOverride = require('method-override'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000;

// ENVIRONMENT PORT
const 
    mongoConnectionString = process.env.MONGOD_URI || "mongodb://joy_ess:W3h3artGA!01@ds153730.mlab.com:53730/joy-ess_project-01_1st-fullstack-app"

// MONGOOSE CONNECTION
mongoose.connect(mongoConnectionString, (err) => {
    console.log(err || "Connected to mLab. (passport-authentication)")
});

// WILL STORE SESSION INFORMATION AS A 'sessions' COLLECTION IN MONGO
const store = new MongoDBStore({
    uri: mongoConnectionString,
    collection: 'sessions'
});

    // DATABASE
// require('./db');

// MIDDLEWARE
app.use(express.static(__dirname + '/views'))
app.use(logger('dev')) //LOG INCOMING REQUESTS TO TERMINAL
app.use(cookieParser()) // INTERPRET COOKIES THAT ARE ATTACHED TO REQUESTS
app.use(express.urlencoded({extended: true})) // INTERPRET STANDARD FORM DATA IN REQUESTS
app.use(flash()) // SET AND RESET FLASH MESSAGES
app.use(methodOverride('_method')) // ALLOW FOR METHOD OVERRIDE ON HTML FOR GET/POST TO BE REPLACED BY PATCH/PUT/DELETE
app.use(express.json());
app.use(logger('dev'));

// EJS CONFIGURATIONS
app.set('view engine', 'ejs')
app.use(ejsLayouts);

app.use(session({
    secret: 'expectoPatronum',
    cookie: { maxAge: 6000000000 },
    resave: true,
    saveUninitialized: false,
    store
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.currentUser = req.user;
    app.locals.loggedIn = !!req.user;

    next();
});


// ROUTES
    // ROOT ROUTE:
app.get('/', (req, res) => {
    res.render('index')
})
app.use('/users', usersRouter)
app.use('/hikes', hikesRouter)


// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});