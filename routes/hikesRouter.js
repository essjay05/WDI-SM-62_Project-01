// SET CONSTANTS
const
    express = require('express'),
    app = express(),
    hikesRouter = new express.Router(),
    passport = require('passport');

// GET HIKES NEAR LOS ANGELES, CA from HIKING API
let nearbyHikes = "https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6";

// ADD LOCATIONS TO takeAHike.ejs
app.get('/takeahike', (req, res) => {
    axios.get(nearbyHikes)
        .then(({data}) => {
            res.render('takeAhike', {data});
        })
});

module.exports = hikesRouter;