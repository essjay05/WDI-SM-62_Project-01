// REQUIRE EXPRESS AND ROUTERS
const
    express = require('express'),
    usersRouter = new express.Router(),
    passport = require('passport'),
    hikesRouter = require('../routes/hikesRouter'),
    User = require('../models/User');

// RENDER LOGIN VIEW
usersRouter.get('/login', (req, res) => {
    res.render('index', { message: req.flash('loginMessage') })
});

// AUTHENTICATING LOGIN
usersRouter.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users/profile',
    failureRedirect: '/'
}));

// RENDER SIGNUP VIEW
usersRouter.get('/signup', (req, res) => {
    res.render('signup', {message: req.flash('signupMessage') })
});

// AUTHENTICATING SIGNUP [CREATE] works :)
usersRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup'
}));

// SHOW PROFILE MUST BE LOGGED IN [READ] works :)
usersRouter.get('/profile', isLoggedIn, (req, res) => {
    // Render the user's profile ONLY when the user is logged in
    res.render('profile', { user: req.user })
});



// RENDER FORM TO EDIT PROFILE
usersRouter.get('/profile/edit', isLoggedIn, (req, res) => {
    res.render('editProfile');
});

// UPDATE PROFILE [UPDATE] works :)
usersRouter.patch('/profile', isLoggedIn, (req, res) => {
    // CHECK TO SEE IF THE REQUEST BODY HAS A TRUTHY PASSWORD KEY (MEANING THE USER IS TRYING TO MODIFY PASSWORD)
    if(!req.body.firstName) delete req.body.firstName;
    if(!req.body.lastName) delete req.body.lastName;
    if(!req.body.email) delete req.body.email;
    if(!req.body.password) delete req.body.password;
    if(!req.body.location) delete req.body.location;
    if(!req.body.skillLevel) delete req.body.skillLevel;
    Object.assign(req.user, req.body);
    req.user.save(( err, updatedUser) => {
        if (err) console.log(err);
        res.redirect('/users/profile');
    })
});

// ADDING HIKE to User's Hike Array
usersRouter.patch('/profile', isLoggedIn, (req, res) => {
    console.log(req);
})

// LOG OUT
usersRouter.get('/logout', (req, res) => {
    // DESTROY THE SESSION AND REDIRECT THE USER BACK TO THE SPLASH PAGE.
    req.logout();
    res.redirect('/');
});

// DELETE USER PROFILE [DELETE] works :)
usersRouter.delete('/profile', isLoggedIn, (req, res) => {
    User.findByIdAndDelete(req.user._id, (err, deletedUser) => {
        if (err) res.json({ success: false, err });
        res.render('index');
    })  
});

// MIDDLEWARE:
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = usersRouter;
