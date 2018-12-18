// REQUIRE IN MONGOOSE
const mongoose = require('mongoose');

// CREATE MONGOOSE SCHEMA 
const Schema = mongoose.Schema;

// CREATE NEW/TOPIC SCHEMA
const HikeSchema = new Schema ({
    id: Number,
    name: String,
    complete: Boolean,
    type: String,
    summary: String,
    difficulty: String,
    stars: Number,
    likes: Number,
    location: String,
    length: Number,
    ascent: Number,
    descent: Number,
    high: Number,
    low: Number,
    longitude: Number,
    latitude: Number,
    conditionStatus: String,
    conditionDetails: String,
    conditionDate: String,
    users: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
}, {timestamps: true})


// CREATE MODEL
const Hike = mongoose.model('Hike', HikeSchema);

// MAKE EXPORTABLE
module.exports = Hike;