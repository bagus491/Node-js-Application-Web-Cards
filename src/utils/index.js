const { json } = require('body-parser')
const fs = require('fs')



const filepath = './data-api'
if(!fs.existsSync(filepath)){
    fs.mkdirSync(filepath)
}


const datapath = './data-api/Users.json'
if(!fs.existsSync(datapath)){
    fs.writeFileSync(datapath,'[]','utf-8')
}


const loadUsers = () => {
    const Users = fs.readFileSync('./data-api/Users.json', 'utf-8')
    const getUsers = JSON.parse(Users)
    return getUsers
}

//
const getOneName = (Username) => {
    const Users = loadUsers()
    const getUsers = Users.find((e) => e.Username === Username)
    return getUsers
}


//save contacts
const saveUsers = (Users) => {
    fs.writeFileSync('./data-api/Users.json',JSON.stringify(Users))
}

//addUsers
const addUsers = (User) => {
    const Users = loadUsers()
    Users.push(User)
    saveUsers(Users)
}


module.exports = {loadUsers,getOneName,addUsers}



