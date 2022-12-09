require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(PORT, function(){
    console.log(`Server started on port no: ${PORT}`)
})
