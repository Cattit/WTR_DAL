var express = require('express')
var cors = require('cors') //обращение к внешним ресурсам
var bodyParser = require('body-parser')
var morgan = require('morgan') //логи

const db = require('./db')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001, function(){
    console.log('Example app listening on port 3001!')
})

function saveMeteoData(dataForecast){ // ???
  let data = require("./routes/yandex.js"); 
  data.saveData(dataForecast);
} 
module.exports.saveMeteoData = saveMeteoData;

function saveNowData(dataForecast){ 
  let data = require("./routes/owm.js"); 
  data.saveData(dataForecast);  
}
module.exports.saveNowData = saveNowData;