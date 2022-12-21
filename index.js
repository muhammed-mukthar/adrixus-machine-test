const express =require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const authRouter=require('./routes/auth')
const homeRouter=require('./routes/home')
dotenv.config()

app.use(express.json())
app.use(cors({ origin: process.env.CORS_VARS.split(", ") }));
 mongoose.connect(process.env.DBURL)
 .then(()=>console.log('connected to db')
 )
 app.use('/auth',authRouter)
 app.use('/',homeRouter)
app.listen(5000,()=>{
    console.log('server started at port 50000');
})