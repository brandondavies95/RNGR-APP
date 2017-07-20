const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  id: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Meme = mongoose.model('Meme', memeSchema)


module.exports = Meme
