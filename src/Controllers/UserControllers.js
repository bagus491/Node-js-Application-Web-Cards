

const {loadUsers} = require('../utils/index')

//data
const DataUsers = (req,res) => {
    res.json(loadUsers())
}



//home
const HomeWeb = (req,res) => {
    res.render('home', {
        title: 'halaman/home',
        layout: 'main-layouts/main-layouts'
    })
}

//login
const LoginUsers = (req,res) => {
    res.render('login', {
        title: 'halaman/login',
        layout: 'login',
    })
}

//register
const RegisterUsers = (req,res) => {
        res.render('register', {
            title: 'halaman/register',
            layout: 'register',
        })
}

//profile
const RegisterProfile = (req,res) => {
        res.render('profile', {
            title: 'halaman/profile',
            layout: 'main-layouts/main-layouts',
         })
}


module.exports = {HomeWeb,LoginUsers,RegisterUsers,DataUsers,RegisterProfile}