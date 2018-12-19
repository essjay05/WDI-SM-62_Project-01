// REQUIRE IN MONGOOSE
const mongoose = require('mongoose');

// CREATE MONGOOSE SCHEMA 
const Schema = mongoose.Schema;

// CREATE NEW/TOPIC SCHEMA
const HikeSchema = new Schema ({
    name: String,
    summary: String,
    location: String,
    length: String,
    longitude: Number,
    latitude: Number,
    trailUrl: String,
    users: [{
        type: mongoose.Schema.ObjectId, 
        ref: 'User'}]
}, {timestamps: true})


// CREATE MODEL
const Hike = mongoose.model('Hike', HikeSchema);

// MAKE EXPORTABLE
module.exports = Hike;