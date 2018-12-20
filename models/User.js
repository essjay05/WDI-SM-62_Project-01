// SET UP CONSTANTS

// REQUIRE IN MONGOOSE
const 
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    // CREATE NEW/TOPIC SCHEMA
    UserSchema = new mongoose.Schema ({
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        location: String,
        skillLevel: String,
        profilePhoto: String,
        signedWaiver: Boolean,
        hikes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hike'
        }]
    }, {timestamps: true});


// USER MODEL SCHEMAS TO AUTHENTICATE USER PASSWORD
// TO BE RAN EVERYTIME THE USER SAVES
    UserSchema.pre('save', function(next) {
        const user = this;
// Is the user changing the password?
    // NO
    if (!user.isModified('password')) return next();
    // if YES... add salt
    bcrypt.genSalt(8, (err, salt) => {
        if (err) return next(err);
        // then HASH
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err);
            // Set password to HASH
            user.password = hash;
            next(); 
        })
    })
});

// COMPARE current 'password to user's password'?
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// CREATE MODEL
const User = mongoose.model('User', UserSchema);

// MAKE EXPORTABLE
module.exports = User;