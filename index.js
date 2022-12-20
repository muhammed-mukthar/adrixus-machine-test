const express =require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const authRouter=require('./routes/auth')
dotenv.config()

app.use(express.json())
app.use(cors())
 mongoose.connect(process.env.DBURL)
 .then(()=>console.log('connected to db')
 )
 app.use('/auth',authRouter)
app.listen(5000,()=>{
    console.log('server started at port 50000');
})