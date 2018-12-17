// ADD A hikes CONTROLLER

// REQUIRE HIKES MODEL
const Hike = require('../models/Hike');

module.exports = {
    index: (req, res) => {
        Hike.find({}, (err, hikes) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, hikes });
        })
    },

    
}

