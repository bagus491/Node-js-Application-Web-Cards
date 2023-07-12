const express = require('express')
const app = express()
require('../utils/index')


//middleware
const path = require('path')
app.set('views', path.join(__dirname, '../views'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)


app.get('/',(req,res) => {
   res.render('home', {
    title: 'halaman/home',
    layout: 'main-layouts/main-layouts'
   })
})

app.get('/login',(req,res) => {
    res.render('login', {
        title: 'halaman/login',
        layout: 'login',
    })
})

app.get('/register', (req,res) => {
    res.render('register', {
        title: 'halaman/register',
        layout: 'register',
    })
})




module.exports = app