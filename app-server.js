const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

app.use(express.json())
app.use((req, res, next) =>{
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'wine-barrel.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./config/checkToken'))
app.use('/api/users', require('./routes/api/users'))
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'))
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'))


module.exports = app