const express = require ("express");
const bcrypt = require ('bcrypt');
const saltRounds = 10;
const Model = require('../../models/index');
const {User} = Model;
const {getToken} = require ('../../config/utils');


const router = express.Router();
 /* admin */

router.get("/admin", async (req, res)=>{
    try{
    const user = new User({
        name: 'Katie',
        email: "katie_lisabeth@yahoo.com",
        phone: 0465542471,
        password: '1234567',
        isAdmin: true
    });
const newUser = await user.save();
    res.send(newUser)
}catch(error){
    res.send({msg: error.message})
}
});

    router.post('/signin', async (req, res)=>{

        const signedinUser = await User.findOne({
            email: req.body.email,
          });
          if (
            signedinUser
             &&
            bcrypt.compareSync(req.body.password, signedinUser.password)
          ) {
            res.send({
                _id: signedinUser.id,
                name: signedinUser.name,
                email: signedinUser.email,
                phone: signedinUser.phone,
                isAdmin: signedinUser.isAdmin,
                token: getToken(signedinUser)
            })
           
        }else{
            res.status(401).send({msg: 'Invalid email or password.'})
        }
        
        });

        router.post('/register', async (req, res)=>{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password, saltRounds)
                
            })
            const newUser = await user.save()
            if(newUser){
                res.send({
                    _id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    phone: newUser.phone,
                    isAdmin: newUser.isAdmin,
                    token: getToken(newUser)
                })
            }else{
                res.status(401).send({msg: 'Invalid user data'})
            }
            
            })
        
        


module.exports = router;