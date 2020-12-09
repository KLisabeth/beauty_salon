const express = require ("express");
const User = require ('../../models/userModel');


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


module.exports = router;