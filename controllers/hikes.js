// ADD A HIKES CONTROLLER

// REQUIRE HIKES MODEL
const { User, Hike } = require('../models');

// CONTROLS
module.exports = {
    index: (req, res) => {
        Hike.find({}, (err, hikes) => {
            if (err) res.json({ success: false, err });
            res.render('takeahike', { success: true, hikes });
        })
    },

    show: (req, res) => {
        Hike.findById(req.params.id)
            .populate('users')
            .exec((err, hike) => {
                if (err) res.json({ success: false, err });
                res.json({ success: true, hike });
            })
    },

    // create: (req, res) => {
    //     Hike.create(req.body, (err, newHike) => {
    //         if (err) res.json({ success: false, err });
    //         res.json({ success: true, newHike });
    //     })
    // },

    addUser: (req, res) => {
        let { id } = req.params;
        
        // console.log(res)
        // FOR VIEW TESTS
        // let user_id = req.user.id
        // FOR API TESTS
        var user_id = "5c1ab5fddcec6584e3fbcd02"  
        Hike.findById(id, (err, hike) => {
            if (err) res.json({ success: false, err });

            let user = hike.users.find(id => id == user_id);
            if (user) res.json({ success: false, message: "User already completed." });

            hike.users.push(user_id)
            // hike.users = [];
        
            hike.save(err => {
                User.findById(user_id, (err, foundUser) => {
                    console.log(foundUser);
                    foundUser.hikes.push(hike.id);
                    // foundUser.hikes = [];
                    foundUser.save(err => {
                        if (err) res.json({ success: false, err });
                        res.json({ success: true, hike, foundUser })
                    })
                })
            })
        });
    },

    removeUser: (req, res) => {
        let { user_id, hike_id } = req.params;
        Hike.findById(hike_id, (err, hike) => {
            if (err) res.json({ success: false, err });

            // SET USER VARIABLE TO HIKE.USERS.ID
            let user = hike.users.id(user_id);

            // CHECK IF USER EXISTS
            if (user) res.json({ success: false, message: "User already marked as completed." });
            user.email = req.body.email;

            // SAVE USER TO HIKE
            user.save(err => {
                if (err) res.json({ success: false, err });
                res.json({ success: true, addedUser });
                
                hike.users.push(addedUser);
                hike.save((err, savedHike) => {
                    if (err) res.json({ success: false, err });
                    res.json({ success: true, savedHike });
                })
            })
        });

    },

    destroy: (req, res) => {
        Hike.findByIdAndDelete(req.params.id, (err, deletedHike)=> {
            if (err) res.json({ success: false, err });
            res.json({ success: true, deletedHike});
        })
    }
};