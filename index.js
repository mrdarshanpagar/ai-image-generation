require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT


app.listen(PORT, function(){
    console.log(`Server started on port no: ${PORT}`)
})
