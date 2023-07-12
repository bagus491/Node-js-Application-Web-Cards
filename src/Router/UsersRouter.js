const express = require('express')
const app = express()
require('../utils/index')

app.get('/',(req,res) => {
    res.send('hello world')
})






module.exports = app