// SET CONSTANTS
const
    express = require('express'),
    app = express(),
    hikesRouter = new express.Router(),
    passport = require('passport'),
    axios= require('axios');

// GET HIKES NEAR LOS ANGELES, CA from HIKING API

hikesRouter.get('/takeahike', isLoggedIn, (req, res) => {
    // axios.get("https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6");
    //     .then(({ data }) => {
        let nearbyHikes = "https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6";  
        axios.get(nearbyHikes)
            .then(({ data }) => {
            res.render('takeahike', data);
        });
});

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