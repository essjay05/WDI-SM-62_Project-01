// SET CONSTANTS
const
    express = require('express'),
    hikesRouter = new express.Router(),
    Hike = require('../controllers/hikes');

// ROUTES
// RENDER ROUTES:
// hikesRouter.get('/index', isLoggedIn, Hike.index, (req, res) => {
//     // RENDER THE CSC HIKE LIST ONLY WHEN THE USER IS LOGGED IN
//     res.json('takeahike')
// });



// INDEX
hikesRouter.get('/', Hike.index)

// SHOW 1
hikesRouter.get('/:id', Hike.show)

// CREATE NEW HIKE
// hikesRouter.post('/', Hike.create)

// USER/HIKE RELATIONSHIP ROUTES
// INDEX USERS
// ADD USER TO USERS ARRAY
hikesRouter.post('/:id/users/', Hike.addUser);

// REMOVE USER FROM USERS ARRAY
hikesRouter.patch('/users/:id', Hike.removeUser);

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