const express = require('express')
const router = express.Router()
const passport = require('passport')

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
  res.redirect('http://localhost:3000');
})

router.get('/login', function (req, res) {
  res.render('login');
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


router.get('/login', function (req, res) {
    if (req.user) {
        res.redirect('http://localhost:3000/profile')
    } else {
        res.render('login')
    }
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    if (req.user) {
        res.redirect('http://localhost:3000/profile')
    } else {
        res.render('login', { message: 'Incorrect email or password!' })
    }
})

router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/login')
})

router.get('/signup', function (req, res) {
    if (req.user) {
        res.redirect('http://localhost:3000/profile')
    } else {
        res.render('signup')
    }
})

router.post('/signup', function (req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function(err, user) {
        if (err) {
            return res.render('signup', { message: err })
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('http://localhost:3000/profile')
        })
    })
})

module.exports = router
