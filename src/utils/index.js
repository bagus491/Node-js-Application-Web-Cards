
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

//Profile

const loadProfile = () => {
    const Profiles = fs.readFileSync('./data-api/Profile.json','utf-8')
    const getProfile = JSON.parse(Profiles)
    return getProfile
}


const SaveProfiles = (Profiles) => {
    fs.writeFileSync('./data-api/Profile.json', JSON.stringify(Profiles))
}

const addProfile = (profileGet) => {
    const Profiles = loadProfile()
    Profiles.push(profileGet)
    SaveProfiles(Profiles)
}

const getProfile = (Username) => {
    const Profiles = loadProfile()
    const findProfiles = Profiles.find((e) => e.Username === Username)
    return findProfiles
}

module.exports = {loadUsers,getOneName,addUsers,addProfile,getProfile}



