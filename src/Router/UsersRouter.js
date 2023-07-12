const express = require('express')
const app = express()
require('../utils/index')

//controllers
const {HomeWeb,LoginUsers,RegisterUsers} = require('../Controllers/UserControllers')


//middleware
const path = require('path')
app.set('views', path.join(__dirname, '../views'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)

app.get('/',HomeWeb)

app.get('/login',LoginUsers)

app.get('/register',RegisterUsers)



module.exports = app