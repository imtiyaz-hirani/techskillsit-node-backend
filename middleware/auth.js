const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{ //next is a callback 
    //get token from header
    const token = req.header('x-auth-token'); 

    //check if no token
    if(!token){
        return res.status(400).json(
            {
                errors: [{msg: "Invalid Token"}]
            })
    }
    
    //verify the token
    try{
            const decrypted_response = jwt.verify(token,'123456'); 
            req.user = decrypted_response.user; 
            next();
    }
    catch(err){
        res.status(401).json({msg: 'Invalid token'});
    }
}