const express = require('express')
const Auth0Strategy = require('passport-auth0')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/users')



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

router.get('/profile', isLoggedIn, function (req, res) {
  res.redirect('http://localhost:3000/profile')
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/login')
})

router.get('/login', function (req, res) {
  res.json('this is the login page')
})

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})
)

router.get('/authgoogle/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/login'
})
)

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/profile");
  }
);

router.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
});

router.post('/login', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
          console.log(err)
            return res.redirect('http://localhost:3000/login')
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('http://localhost:3000/profile')
        })
    })
})

passport.use(isLoggedIn)

module.exports = router
