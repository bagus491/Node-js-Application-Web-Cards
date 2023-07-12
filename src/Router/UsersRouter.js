const express = require('express')
const app = express()
require('../utils/index')
const {getOneName,addUsers} = require('../utils/index')

// validator
const {body,validationResult} = require('express-validator')

//controllers
const {HomeWeb,LoginUsers,RegisterUsers,DataUsers,RegisterProfile} = require('../Controllers/UserControllers')


//middleware
const path = require('path')
app.set('views', path.join(__dirname, '../views'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)

const jwt = require('jsonwebtoken')
const secret = 'dashj1h2h4j5ij121iis'


const multer = require('multer')
const Upload = multer({dest: 'uploads/'})


//router untuk rest
app.get('/data',DataUsers)

app.get('/',HomeWeb)

app.get('/login',LoginUsers)

app.get('/register',RegisterUsers)

app.get('/profile',RegisterProfile)

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
       jwt.sign({Username: req.body.Username},secret,{expiresIn: '1h'}, (err,token) => {
        if(err)throw new err;
        res.cookie('token',token)

        // res.send({token})
        addUsers(req.body)
        res.redirect('/profile')
       })
    }
})

app.post('/login',async (req,res) => {
    const dataOk = await getOneName(req.body.Username)
    if(dataOk){
        jwt.sign({Username: req.body.Username},secret,{expiresIn: '1h'}, (err,token) => {
            if(err)throw new err;
            res.cookie('token',token)

            //kalau berhasil
            res.redirect('/profile')
        })
    }else{
        res.redirect('/login')
    }
})

app.post('/profile',Upload.single('Avatar'),(req,res) => {
    res.send({Foto: req.file.path,Username:'tubagus'})
})
module.exports = app