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
router.get('/users/:id', function (req,res) {
  User.findOne({
    id: req.params.id,
    deletedON: null
  }, function (err, user) {
    res.json(user)
  })
})

//Create
router.post('/users', function (req, res) {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
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
router.put('/users/:id', function (req, res) {
  User.findByIdAndUpdate(
    req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      updatedON: new Date()
    },
    { new: true, runValidators: true },
      function (err, user) {
        res.json(user)
    })
})

//Destroy
router.delete('/users/:id', function (req, res) {
  User.findByIdAndUpdate(
        req.params.id,
        { deletedON: new Date() },
        { new: true, runValidators: true },
        function (err, user) {
          res.json(user)
      })
    })

    module.exports = router
