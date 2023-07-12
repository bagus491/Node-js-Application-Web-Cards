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




module.exports = {loadUsers}



