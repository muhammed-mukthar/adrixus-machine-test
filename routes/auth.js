const router=require('express').Router()
const userModel=require('../model/UserSchema')

router.post('/register',async(req,res)=>{
const user=await userModel.findOne({email:req.body.email})
console.log(user);
if(!user){
const newuser=await userModel.create(req.body)
res.json({data:newuser})
}else{
    res.json({err:'user already exist'})
}
})
module.exports=router