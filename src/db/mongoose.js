const mongoose = require('mongoose')

if ( process.env.NODE_ENV === 'production'){
  var connectionURL = process.env.DB_CONNECTION_STRING
} else {
  const config = require('../../src/config.js')
  var connectionURL = config.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
