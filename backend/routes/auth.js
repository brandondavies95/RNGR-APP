const express = require('express')
const router = express.Router()
const passport = require('passport')

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

router.get('/profile', isLoggedIn, function (req, res) {
  res.send('Logged in!')
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


module.exports = router
