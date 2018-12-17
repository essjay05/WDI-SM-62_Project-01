// SET CONSTANTS
const
    express = require('express'),
    app = express(),
    hikesRouter = new express.Router(),
    passport = require('passport'),
    axios= require('axios');

// GET HIKES NEAR LOS ANGELES, CA from HIKING API

// axios.get(nearbyHikes);
    
//     .then(res => {
//         let localHikes = res.data.trails;
//         console.log(res.data.trails);
//     }



hikesRouter.get('/takeahike', isLoggedIn, (req, res) => {
    // axios.get("https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6");
    //     .then(({ data }) => {
        let nearbyHikes = "https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6";  
        axios.get(nearbyHikes)
            .then(({ data }) => {
            res.render('takeahike', data);
        });
});




// MIDDLEWARE:
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = hikesRouter;