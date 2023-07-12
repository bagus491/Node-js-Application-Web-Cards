const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//midleeware
app.use(express.urlencoded({extended:true}))
app.set(path.join(__dirname, 'src/views'))
app.set(path.join(__dirname, 'src/public'))
app.set(path.join(__dirname, 'src/router'))

//middle
const mainlayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(mainlayouts)




app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})