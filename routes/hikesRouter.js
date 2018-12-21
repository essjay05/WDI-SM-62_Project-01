// SET CONSTANTS
const
    express = require('express'),
    hikesRouter = new express.Router(),
    Hike = require('../controllers/hikes');

// ROUTES
// RENDER ROUTES:
// RENDER THE CSC HIKE LIST ONLY WHEN THE USER IS LOGGED IN
    hikesRouter.get('/index', isLoggedIn, Hike.index)

// USER/HIKE RELATIONSHIP ROUTES
    // ADD USER TO USERS ARRAY
    hikesRouter.post('/:id/users/', isLoggedIn, Hike.addUser)

    // REMOVE USER FROM USERS ARRAY
        // hikesRouter.patch('/users/:id', Hike.removeUser);




// ----------- CRUD For HikesRouter [ADMIN ONLY]: ----------- //
// INDEX
    // hikesRouter.get('/', Hike.index)

// SHOW 1
    // hikesRouter.get('/:id', Hike.show)

// CREATE NEW HIKE
    // hikesRouter.post('/', Hike.create)

// DESTROY
    // hikesRouter.delete('/:id', Hike.destroy)


// MIDDLEWARE:
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = hikesRouter;