// SET UP CONSTANTS
// REQUIRE IN MONGOOSE
const mongoose = require('mongoose');

// CREATE MONGOOSE SCHEMA 
const Schema = mongoose.Schema;

// CREATE NEW/TOPIC SCHEMA
const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    location: String,
    skillLevel: String,
    profilePhoto: String,
    signedWaiver: Boolean,
    hikes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Hike'
    }]
}, {timestamps: true});


// CREATE MODEL
const User = mongoose.model('User', UserSchema);

// MAKE EXPORTABLE
module.exports = User;