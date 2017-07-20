const express = require('express')
const router = express.Router ()
const mongoose = require('mongoose')

const Meme = require('./../models/memes')

//Index
router.get('/memes', function (req,res) {
  Meme.find(function (err, memes) {
    if (err) {
      res.json(err)
    } else {
      res.json(memes)
    }
  })
})

// Show
router.get('/memes/:id', function (req, res) {
  Meme.findById(this.req.params.id, function (err, memes) {
    if (err) {
      res.json(err)
    } else {
      res.json(memes)
    }
  })
})

// Create
router.post('/memes', function (req, res) {
  const meme = new Meme({
    title: 'this.props.memes[12].title',
    url: 'this.props.memes[12].url',
    id: 'this.props.memes[12].id',
  })
  meme.save(function (err, meme) {
    if (err) {
      res.json(err)
    } else {
      res.json(meme)
    }
  })
})

module.exports = router
