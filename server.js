const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const router=require('./Routes/user')

app.use(express.json())

// connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// routes
app.use("/users",router)

// create port
const port = process.env.PORT || 4000;
app.listen(port,(err)=>{
    if((err)) console.log ("server not connecting")
    else console.log(`The server is running on port ${port}`)
   
})
