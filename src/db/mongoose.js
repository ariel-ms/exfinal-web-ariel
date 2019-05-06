const mongoose = require('mongoose')

if ( process.env.NODE_ENV === 'production'){
  var connectionURL = process.env.connectionURL
} else {
  const config = require('../../src/config.js')
  var connectionURL = config.connectionURL
}

// var connectionURL = 'mongodb+srv://m001-student:1234@cluster0-sjcub.mongodb.net/labweb7?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
