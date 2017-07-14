const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const User = require('./../models/users')
const configAuth = require('./auth')

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })

  passport.use(new BasicStrategy(function (username, password, callback) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return callback (err)
      }
      if (!user) {
        return callback(null,false)
      }
      if (user.password != password) {
        return callback(null, false)
      }
      return callback(null, user)
    })
  })),
  function(accessToken, refreshToken, extraParams, profile, done) {
   return done(null, profile);
 }


  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },
  function (token, refreshToken, profile, done) {
    User.findOne({ 'google.id': profile.id}, function (err, user) {
      if (err) {return done (err) }
      if (user) {
        return done (null, user)
      } else {
        // ToDo: Finish
        const newUser = new User({
          'email': profile.emails[0].value,
          'password': token,
          'google.id': profile.id,
          'google.token': token,
          'google.name': profile.displayName,
          'google.email': profile.emails[0].value

        })


        newUser.save(function (err) {
          if (err) {throw err}
          return done (null, newUser)
        })
      }
    })
  }))
}
