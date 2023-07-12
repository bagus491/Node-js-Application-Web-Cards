const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//UsersController
const UserRouter = require('./src/Router/UsersRouter')

//midleeware
app.use(express.urlencoded({extended:true}))
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