const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connection=async()=>{
    await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
console.log("Mongodb is connected")
}
module.exports=connection;