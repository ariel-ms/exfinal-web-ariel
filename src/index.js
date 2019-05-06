const express = require('express')
require('./db/mongoose')
// var cors = require('cors');

const router = require('./routes')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // parsea a json
app.use(router)
// app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})
