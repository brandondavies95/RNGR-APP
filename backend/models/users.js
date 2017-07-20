const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

//validation of users
const userSchema = new Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    validate: [
      function (email, callback) {
        User.findOne({ email: email}, function (err, user) {
          if (err) { console.log(err) }
          if (user) {
            callback(false)
          } else {
            callback(true)
          }
        })
      },
      'email is already in use'
    ]
  },

  password: {
    type: String,
    minlength: [6, 'Password not long enough'],
    required: [false, 'A user needs a password']
  },

  createdOn: {
    type: Date,
    default: new Date()
  },

  updatedOn: {
    type: Date,
    default: new Date()
  },

  deleteON: {
    type: Date,
    default: null
  },
  google: {
    id: String,
    token: String,
    name: String,
    email: String
  },
})

//itemSchema.options.toJSON ={
//  getters: true,
//  virtuals: false,
//  transform: function (doc, ret, options) {
//    delete ret._i
//    delete ret.__v

  //}
//})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)


module.exports = User
