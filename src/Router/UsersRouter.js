const express = require('express')
const app = express()
require('../utils/index')
const {getOneName,addUsers} = require('../utils/index')

// validator
const {body,validationResult} = require('express-validator')

//controllers
const {HomeWeb,LoginUsers,RegisterUsers,DataUsers} = require('../Controllers/UserControllers')


//middleware
const path = require('path')
app.set('views', path.join(__dirname, '../views'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)



//router untuk rest
app.get('/data',DataUsers)

app.get('/',HomeWeb)

app.get('/login',LoginUsers)

app.get('/register',RegisterUsers)

//router post
app.post('/register', [
    body('Username').custom(async (value) => {
        const duplikat = await getOneName(value)
        if(duplikat){
            throw new Error('nama sudah tersedia')
        }else{
            return true
        }
    }),
    body('Password').isLength({min: 5}).withMessage('password minimal 5')
] ,(req,res) => {
    const error =  validationResult(req)
    if(!error.isEmpty()){
        res.send({error: error.array()})
    }else{
        addUsers(req.body)
        res.redirect('/login')
    }
})

module.exports = app