

const {loadUsers} = require('../utils/index')

//data
const DataUsers = (req,res) => {
    res.json(loadUsers())
}



//home
const HomeWeb = (req,res) => {
    const token = req.cookies.token
    if(token){
        const dataOk = req.cookies.id
        if(dataOk){
            res.redirect('/profile')
        }else{
            res.render('home', {
                title: 'halaman/home',
                layout: 'main-layouts/main-layouts'
            })
        }
    }else{
        res.render('home', {
            title: 'halaman/home',
            layout: 'main-layouts/main-layouts'
        })
    }
}

//login
const LoginUsers = (req,res) => {
    const token = req.cookies.token
    if(token){
        const dataOk = req.cookies.id
        if(dataOk){
            res.redirect('/profile')
        }else{
            res.render('login', {
                title: 'halaman/login',
                layout: 'login',
            })
        }
    }else{
        res.render('login', {
            title: 'halaman/login',
            layout: 'login',
        })
    }
   
}

//register
const RegisterUsers = (req,res) => {
    const token = req.cookies.token
    if(token){
        const dataOk = req.cookies.id
        if(dataOk){
            res.redirect('/profile')
        }else{
            res.render('register', {
                title: 'halaman/register',
                layout: 'register',
            })
        }
    }else{
        res.render('register', {
            title: 'halaman/register',
            layout: 'register',
        })
    }
        
}

//profile
const RegisterProfile = (req,res) => {
    const token = req.cookies.token
    if(token){
        const dataOk = req.cookies.id
        if(dataOk){
            res.render('profile', {
                title: 'halaman/profile',
                layout: 'main-layouts/main-layouts',
             })
        }else{
            res.clearCookie('token')
            res.clearCookie('id')
            res.redirect('/login')
        }
    }else{
        res.clearCookie('token')
        res.clearCookie('id')
        res.redirect('/login')
    }
       
}


module.exports = {HomeWeb,LoginUsers,RegisterUsers,DataUsers,RegisterProfile}