
const userModel=require('../model/UserSchema')
const bcrypt=require('bcrypt')


exports.RegisterController=async(req,res)=>{
    const user=await userModel.findOne({email:req.body.email})
    console.log(user);
    if(!user){
        const userdetails =  new userModel({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
          });
        let newuser=  await userdetails.save();

    res.json({data:newuser})
    }else{
        res.json({err:'user already exist'})
    }
    }

exports.LoginController=async (req, res) => {
    const userexist = await userModel.findOne({ email: req.body.email });
    if (userexist) {
      const validpassword = bcrypt.compareSync(
        req.body.password,
        userexist.password
      );
      if (validpassword) {
        res.json({ data: "user login successfully" });
      } else {
        res.json({ err: "invalid credentials" });
      }
    } else {
      res.json({ err: "invalid credentials" });
    }
  }