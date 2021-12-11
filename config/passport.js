const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/user-model')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/redirect"
},
(accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id }).then((foundUser) => {
      if (foundUser) {
        console.log('User already exist.')
        done(null, foundUser)
      } else {
        new User({
          name: profile.displayName,
          googleID: profile.id,
          thumbnail: profile.photos[0].value
        })
          .save()
          .then((newUser) => {
            console.log('New user created.')
            done(null, newUser)
          })
      }
    })
  }
));