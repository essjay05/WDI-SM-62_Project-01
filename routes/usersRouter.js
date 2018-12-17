// REQUIRE EXPRESS AND ROUTERS
const
    express = require('express'),
    usersRouter = new express.Router(),
    passport = require('passport');

// RENDER LOGIN VIEW
usersRouter.get('/', (req, res) => {
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

// AUTHENTICATING SIGNUP
usersRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup'
}));

// SHOW PROFILE MUST BE LOGGED IN
usersRouter.get('/profile', isLoggedIn, (req, res) => {
    // Render the user's profile ONLY when the user is logged in
    res.render('profile', { user: req.user })
});

// RENDER FORM TO EDIT PROFILE
usersRouter.get('/profile/edit', isLoggedIn, (req, res) => {
    res.render('editProfile');
});

// UPDATE PROFILE
usersRouter.patch('/profile', isLoggedIn, (req, res) => {
    // CHECK TO SEE IF THE REQUEST BODY HAS A TRUTHY PASSWORD KEY (MEANING THE USER IS TRYING TO MODIFY PASSWORD)
    if(!req.body.password) delete req.body.password;
    Object.assign(req.user, req.body);
    req.user.save(( err, updatedUser) => {
        if (err) console.log(err);
        res.redirect('/users/profile');
    })
});

// LOG OUT
usersRouter.get('/logout', (req, res) => {
    // DESTROY THE SESSION AND REDIRECT THE USER BACK TO THE SPLASH PAGE.
    req.logout();
    res.redirect('/');
});

// DELETE USER PROFILE
usersRouter.get('/deleted', isLoggedIn, (req, res) => {
    res.render('deletedProfile');
});

// MIDDLEWARE:
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = usersRouter;
