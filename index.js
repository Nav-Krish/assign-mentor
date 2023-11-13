const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const route = require('./Route/route')
const connection = require('./db')
connection()

dotenv.config()

const app=express()
const PORT=process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.use(route)

app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT);
})
