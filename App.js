const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const bodyparser = require('body-parser')

//UsersController
const UserRouter = require('./src/Router/UsersRouter')

//midleeware
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.set(path.join(__dirname, 'src/public'))
app.set(path.join(__dirname, 'src/router'))
 

//roouter
app.use(UserRouter)
app.use('/', (req,res) => {
    res.status(404)
    res.send('404 Not Found')
})


app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})