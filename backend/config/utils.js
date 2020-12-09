const jwt = require('jsonwebtoken');
const key =require ('./key').JWT_SECRET;


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


module.exports = {getToken};