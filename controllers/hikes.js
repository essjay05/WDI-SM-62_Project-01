// ADD A HIKES CONTROLLER

// REQUIRE HIKES MODEL
const User = require('../models/User');
const Hike = require('../models/Hike');

// CONTROLS
module.exports = {
    index: (req, res) => {
        Hike.find({}, (err, hikes) => {
            if (err) res.json({ success: false, err })
            res.render('takeahike', { success: true, hikes });
        })
    },


    // show: (req, res) => {
    //     User.findById(req.params.id)
    //         .populate('hikes')
    //         .exec((err, user) => {
    //             console.log(user)
    //             if (err) res.json({ success: false, err });
    //             res.json({ success: true, user });
    //         })
    // },

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
        let user_id = req.user.id
        // FOR API TESTS
        // var user_id = "5c1ad42fb103b1905ad84c7b"  
        Hike.findById(id, (err, hike) => {
            if (err) res.json({ success: false, err });
            console.log(hike);
            // console.log(hike.users.includes(user_id))
            let foundUser = hike.users.find(id => id == user_id);
            if (foundUser) res.render('hikeAdded');
            
            else hike.users.push(user_id);
            // hike.users = [];
            
            hike.save(err => {
                User.findById(user_id, (err, user) => {
                    user.hikes.push(hike);
                    // user.hikes = [];
                    user.save(err => {
                        if (err) res.json({ success: false, err });
                        res.redirect('/users/profile');
                    })
                })
            })
        });
    },

    // removeUser: (req, res) => {
    //     let { user_id, hike_id } = req.params;
    //     Hike.findById(hike_id, (err, hike) => {
    //         if (err) res.json({ success: false, err });

    //         // SET USER VARIABLE TO HIKE.USERS.ID
    //         let user = hike.users.id(user_id);

    //         // CHECK IF USER EXISTS
    //         if (user) res.json({ success: false, message: "User already marked as completed." });
    //         user.email = req.body.email;

    //         // SAVE USER TO HIKE
    //         user.save(err => {
    //             if (err) res.json({ success: false, err });
    //             res.json({ success: true, addedUser });
                
    //             hike.users.push(addedUser);
    //             hike.save((err, savedHike) => {
    //                 if (err) res.json({ success: false, err });
    //                 res.json({ success: true, savedHike });
    //             })
    //         })
    //     });

    // },

    destroy: (req, res) => {
        Hike.findByIdAndDelete(req.params.id, (err, deletedHike)=> {
            if (err) res.json({ success: false, err });
            res.json({ success: true, deletedHike});
        })
    }
};