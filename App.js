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

 


//jwttoken
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const secret = 'dashj1h2h4j5ij121iis'

app.use('/uploads',express.static('uploads'))

// kalau gak pakai cookie parser error

app.use(cookieParser('secret'))

//pembatasan router middleware
app.use('/profile',(req,res,next) => {
    const token = req.headers.authorization || req.cookies.token
    if(token){
        try{
            const decoded = jwt.verify(token,secret)
            req.Username = decoded
            next()
        }catch{
            res.redirect('/login')
        }
    }else{
        res.redirect('/login')
    }

})

//roouter
app.use(UserRouter)

app.use('/', (req,res) => {
    res.status(404)
    res.send('404 Not Found')
})


app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})