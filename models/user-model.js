const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  googleID: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  thumbnail:{
    type: String
  },
  // Local login
  email: {
    type: String
  },
  password: {
    type: String,
    maxlength: 1024,
    minlength: 8
  }
})

module.exports = mongoose.model('User', userSchema)