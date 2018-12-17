// REQUIRE PASSPORT & LOCAL STRATEGY
const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/User');

// CREATING A SESSION ID AND PASSING ALONG THE COOKIE
passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
});

// LOCAL SIGNUP ACTION
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    // CHECK TO SEE IF THERE'S A MATCHING EMAIL IN THE DATABASE ALREADY... EMAIL WILL BE UNIQUE IDENTIFIER
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        // IF EMAIL ALREADY TAKEN, RETURN FLASH MESSAGE
        if (user) return done(null, false, req.flash('signupMessage', 'That email is already taken.'));

        // IF NO MATCHING EMAIL IN DATABASE FOUND... CREATE NEW USER :)
        User.create(req.body, (err, newUser) => {
            if (err) return console.log(err);
            return done(null, newUser, null)
        })
    })
}));

// LOCAL LOGIN ACTION
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},  (req, email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        // IF EMAIL OR PASSWORD IS INVALID SEND FLASH MESSAGE
        if (!user || !user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Invalid email or password.'));
        return done(null, user);
    });
}));

module.exports = passport;