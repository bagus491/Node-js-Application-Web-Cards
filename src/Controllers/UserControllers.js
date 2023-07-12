

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


module.exports = {HomeWeb,LoginUsers,RegisterUsers}