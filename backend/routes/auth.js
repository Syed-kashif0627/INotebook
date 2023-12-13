const express=require('express');
const User = require('../models/User');
const {body, validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const router=express.Router();

router.post('/createUser',[//checking constraints of email ,name ,password....etc;
    body('name','minimum length for name should be 3').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','password must be min of 6 characters').isLength({min:6})
],async(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{//finding if email already exist in database other wise store in db else throw error
    let user=await User.findOne({email:req.body.email});
        if(user)
        return res.status(400).json({error:"User with this email Already exist!!!"});
        //Salting and Hashing the password
        const salt=await bcrypt.genSaltSync(10);
        const secPswd=await bcrypt.hash(req.body.password,salt)

        user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPswd,
        })
    }
    catch (err){
        console.log(err.message);
        res.status(500).send("Some Error Occured")
    }
    const JWT_Secret='Kashif$06';

    data={
        user:User.Id,
    }
    let authtoken=jwt.sign(data,JWT_Secret);

    res.json({authtoken})
})

module.exports= router