const express = require('express')
const router = express.Router ()
const mongoose = require('mongoose')
const User = require('./../models/users')

const Meme = require('./../models/memes')

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
    username: req.params.id,
    deletedON: null
  }, function (err, user) {
    res.json(user)
  })
})

function addMemes(req, res, userId) {
  const memes = new Meme ({
    title: 'this.props.memes[1].title',
    url: 'this.props.memes[1].url',
    id: 'this.props.memes[1].id',
    userId: userId,
  })
  memes.save(function (err, meme) {
    if (err) {
      res.json(err)
    } else {
      for (var i = 0; i < 4; i++) {
        const meme = new Meme({
          title: ' ',
          url: ' ',
          id: ' ',
          userId: userId,
        })
        meme.save(function (err, meme) {
          if (err) {
            res.json(err)
          }
        })
      }
      res.redirect('http://localhost:3000/profile')   //users/${userId}/memes
    }
  })
}

//Create
router.post('/users', function (req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  })
console.log(user);
user.save(function (err, user) {
  if (err) {
    res.json(err)
  } else {
    const userId = user._id;
    addMemes(req, res, userId)
  }
})
});

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

router.get('/users/:id/memes', function (req, res) {
  Meme.find({userId: req.params.id}, function (err, memes) {
    if (err) {
      res.json(err)
    } else {
      res.json(memes)
    }
  })
})


    module.exports = router
