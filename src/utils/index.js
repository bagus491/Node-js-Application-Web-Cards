const fs = require('fs')



const filepath = './data-api'
if(!fs.existsSync(filepath)){
    fs.mkdirSync(filepath)
}


const datapath = './data-api/Users.json'
if(!fs.existsSync(datapath)){
    fs.writeFileSync(datapath,'[]','utf-8')
}






