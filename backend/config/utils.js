const jwt = require('jsonwebtoken');
const key =require ('./key').jwt_SECRET;


const getToken=(user) =>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, key, {
        expiresIn:'48h'
    }) 
} 
const isAuth = (req, res, next)=>{
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, key, (err, decode)=>{
            if(err){
                return res.status(401).send({msg: "Invalid Token"})
            }
            req.user = decode;
            next();
            return
        });
    }else{
        return res.status(401).send({msg: "Token is not supplied."});
    }
    
}

const isAdmin  = (req, res, next)=>{
    if(req.user && req.user.isAdmin){
        return next();
        }
    return res.status(401).send({msg: "Admin token is not valid."})
}


module.exports = {getToken, isAuth, isAdmin};