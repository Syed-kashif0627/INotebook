const jwt=require('jsonwebtoken')
const JWT_Secret='Kashif$06';


const fetchuser=(req,res,next)=>{
    /// get the user from jwt token and add the id to req object
    let token = req.header('auth-token')
    if(!token)
        res.status(401).send({error:'please authenticate using a valid token'})

    try{
    let data=jwt.verify(token,JWT_Secret)
    req.user=data.user;
    //next() is used to start executing the next middleware
    next();
    }catch(err){
        res.status(401).send({error:'please authenticate using a valid token'})
    }
}
module.exports=fetchuser;