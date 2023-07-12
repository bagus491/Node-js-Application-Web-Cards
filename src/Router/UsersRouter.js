const express = require('express')
const app = express()
require('../utils/index')

//middleware
const path = require('path')
app.set(path.join(__dirname, '../views'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)


app.get('/',(req,res) => {
    res.send('hello world')
})






module.exports = app