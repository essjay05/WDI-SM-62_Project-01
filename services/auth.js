// REQUIRE PASSPORT & LOCAL STRATEGY
const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('..models/User');