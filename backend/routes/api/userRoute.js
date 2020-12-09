const express = require ("express");
const User = require ('../../models/userModel');
const { getToken } = require ('../../config/utils');


const router = express.Router();

router.get("/admin", async (req, res)=>{
    try{
    const user = new User({
        name: 'Katie',
        email: "katie_lisabeth@yahoo.com",
        mobile: 0465542471,
        password: '1234567',
        isAdmin: true
    });
const newUser = await user.save();
    res.send(newUser)
}catch(error){
    res.send({msg: error.message})
}
});
router.post('/register', async (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
        
    })
    const newUser = await user.save()
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            mobile: newUser.mobile,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }else{
        res.status(401).send({msg: 'Invalid user data'})
    }
    
    })


module.exports = router;