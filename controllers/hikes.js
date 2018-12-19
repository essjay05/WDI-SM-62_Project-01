// ADD A HIKES CONTROLLER

// REQUIRE HIKES MODEL
const { User, Hike } = require('../models');

// CONTROLS
module.exports = {
    // index: (req, res) => {
    //     Hike.find({}, (err, hikes) => {
    //         if (err) res.json({ success: false, err });
    //         res.render({ success: true }, 'takeahike');
    //     })
    // },

    show: (req, res) => {
        Hike.findById(req.params.id)
            .populate('users')
            .exec((err, hike) => {
                if (err) res.json({ success: false, err });
                res.json({ success: true, hike });
            })
    },

    create: (req, res) => {
        Hike.create(req.body, (err, newHike) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, newHike });
        })
    },

    addUser: (req, res) => {
        Hike.findById(req.params.id, (err, hike) => {
            if (err) res.json({ success: false, err });

            let newUser = new User(req.body);
            newUser.hike = hike._id;

            newUser.save(err => {
                if (err) res.json({ success: false, err });
                
                hike.users.push(newUser);
                hike.save((err, savedHike) => {
                    if (err) res.json({ success: false, err });
                    res.json({ success: true, savedHike });
                })
            })
        });
    },

    removeUser: (req, res) => {
        Hike.findByIdAndRemove(req.params.id, (err, hike) => {
            if (err) res.json({ success: false, err });

            let remUser = new User (req.body);
            remUser.hike = hike._id;

            remUser.save(err => {
                if (err) res.json({ success: false, err });

                hike.users.pop(remUser);
                hike.save(( err, savedHike ) => {
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
    
}

