const express = require('express')
const app = express()
const route = require('./route/route')
const mongoose = require('mongoose')
require('dotenv').config();
console.log(process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("mongoose is connected"))
.catch((e)=>{console.log("mongoose is not connected")})

app.use('/',route)

let PORT=process.env.PORT
app.listen( PORT ,function(){
    console.log(`THe server is running on port ${PORT}`)
})


