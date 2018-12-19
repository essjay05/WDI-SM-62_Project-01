// SET CONSTANTS
const
    express = require('express'),
    hikesRouter = new express.Router(),
    usersRouter = require('../routes/usersRouter'),
    Hike = require('../controllers/hikes'),
    User = require('../models/User');


// ROUTES
// RENDER ROUTES:
hikesRouter.get('/index', isLoggedIn, (req, res) => {
    // RENDER THE CSC HIKE LIST ONLY WHEN THE USER IS LOGGED IN
    res.render('takeahike', { user: req.user })
});



// INDEX
// hikesRouter.get('/', Hike.index)

// SHOW 1
hikesRouter.get('/:id', Hike.show)

// CREATE NEW HIKE
hikesRouter.post('/', Hike.create)

// ADD USER TO USERS ARRAY
hikesRouter.patch('/:id/users', isLoggedIn, Hike.addUser);

// REMOVE USER FROM USERS ARRAY
hikesRouter.patch('/:id/users', isLoggedIn, Hike.removeUser);

// DESTROY
hikesRouter.delete('/:id', Hike.destroy)

module.exports = hikesRouter;



// CREATE GOOGLE MAP SHOWING EACH OF THE TRAIL LOCATIONS
// let map = function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 34.013, lng: -118.495},
//           zoom: 8
//         })
//       }
// initMap();




// MIDDLEWARE:
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = hikesRouter;