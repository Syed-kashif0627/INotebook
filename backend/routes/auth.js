const express=require('express');
const User = require('../models/User');
const {body, validationResult}=require('express-validator');

const router=express.Router();

router.post('/',[
    body('name','minimum length for name should be 3').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','password must be min of 6 characters').isLength({min:6})
],(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }).then(user => res.json(user))
    .catch(err=>{console.log(err)
        res.json({error:'please enter Unique values',message:err.message})})

})

module.exports= router