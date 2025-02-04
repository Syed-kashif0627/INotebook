const express=require('express');
const User = require('../models/User');
const {body, validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser');

const JWT_Secret='Kashifhe$06';
const router=express.Router();

//ROUTE1: User signup for first time using POST:/user/auth/createUser
router.post('/createUser',[//checking constraints of email ,name ,password....etc;
    body('name','minimum length for name should be 3').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','password must be min of 6 characters').isLength({min:6})
],async(req,res)=>{
    let success=false;
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors: errors.array()});
    }
    try{//finding if email already exist in database other wise store in db else throw error
    let user=await User.findOne({email:req.body.email});
        if(user)
        return res.status(400).json({success,error:"User with this email Already exist!!!"});
        //Salting and Hashing the password
        const salt=bcrypt.genSaltSync(10);
        const secPswd=await bcrypt.hash(req.body.password,salt)

        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPswd,
        })


        const data={
            user:{
                id: user.id
            }
        }
        let authtoken=jwt.sign(data,JWT_Secret);
        success=true;
        res.json({success,authtoken})
    }
    catch (err){
        console.log(err.message);
        res.status(500).send("Some Error Occured")
    }

})

//ROUTE2: User Login using POST: user/auth/login
router.post('/login',[
    body('email','Enter Valid Email').isEmail(),
    body('password','Password cant be blank').exists(),
],async (req,res)=>{
    let success=true;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    let {email,password}=req.body;
    try{
    let user=await User.findOne({email})
    if(!user){
        success=false;
      return res.status(400).json({success,error:"Enter Valid Email ID"})
    }
    let authpass=await bcrypt.compare(password,user.password)
    if(!authpass){
        success=false;
      return res.status(400).json({success,error:'Invalid Password'})
    }
    const data={
        user:{
            id:user.id
        }
    }

    let authtoken=jwt.sign(data,JWT_Secret);
    success=true;
    res.json({success,authtoken})
}catch(err){
    console.log(err.message);
    res.status(500).send("Internal Server Error Occured")
}
})

//ROUTE3: Sending User login details using post: user/auth/getuser
router.post('/getuser',fetchuser,async (req,res)=>{


    try {
        const userId=req.user.id

        let user=await User.findById(userId).select('-password')
        res.json({user})
    } catch (error) {
        console.log(err.message);
        res.status(500).send("Internal Server Error Occured")
    }
})
module.exports= router