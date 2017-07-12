/* app.js */

const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const passport   = require('passport')
const cookieParser = require('cookie-parser')
const session    = require('express-session')

const users      = require('./routes/users')
const auth       = require('./routes/auth')

const passportSetup = require('./config/passport')

passportSetup(passport)


// connect to your local DB
// mongod
// mongoose.connect('mongodb://localhost/RNGR')
// Connect to Kaden's DB
// mongoose.connect('mongodb://144.38.175.196/YourName')
// connect to DJ's DB
mongoose.connect('mongodb://mongodb.cs.dixie.edu/ringer')



app.get('/', function (req, res) {
  res.json('hello world')
})

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(session({ secret: 'deeznuts' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(auth)
app.use(users)
// app.all('*', passport.authenticate('basic', { session: false }))


app.listen(3001, function () {
  console.log('Blunderlist API listening on port 3001!')
})
