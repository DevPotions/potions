var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()

module.exports = app

// Middleware

app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', hbs({extname: 'hbs',defaultLayout: 'main'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Routes

app.get('/home', routes.getHome)

app.get('/assignments', routes.getAssignments)

app.get('/index/:id', routes.getCharacteristics)

app.get('/index/rubbish',routes.getRubbishList)
