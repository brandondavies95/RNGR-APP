const express = require('express')
const router = express.Router ()
const mongoose = require('mongoose')
const User = require('./../models/users')


//Index
router.get('/users', function (req,res) {
  User.find({ deletedON: null })
  .select('-password')
  .exec(function (err, users) {
    res.json(users)
  })
})

//Show
router.get('/users/:username', function (req,res) {
  User.findOne({
    username: req.params.username,
    deletedON: null
  }, function (err, user) {
    res.json(user)
  })
})

//Create
router.post('/users', function (req, res) {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  })

user.save(function (err, user) {
  if (err) {
    res.json(err)
  } else {
    res.json(user)
  }
})
    res.status(201)
    res.json(user)
})

//Update
router.put('/users/:username', function (req, res) {
  User.findByIdAndUpdate(
    req.params.id, {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      updatedON: new Date()
    },
    { new: true, runValidators: true },
      function (err, user) {
        res.json(user)
    })
})

//Destroy
router.delete('/users/:username', function (req, res) {
  User.findByIdAndUpdate(
        req.params.id,
        { deletedON: new Date() },
        { new: true, runValidators: true },
        function (err, user) {
          res.json(user)
      })
    })

    module.exports = router
