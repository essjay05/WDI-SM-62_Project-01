// MONGOOSE SET UP >> POINT AT MONGOD_URI IN .ENV
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI, {useNewUrlParser: true }, err => {
    console.log(err || `Successfully connected to mLab.`)
})

// EXPORT MONGOOSE
module.exports = mongoose;