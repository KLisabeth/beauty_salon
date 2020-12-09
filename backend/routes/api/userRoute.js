const express = require ("express");
const bcrypt = require ('bcrypt');
const User = require ('../../models/userModel');
const {getToken, isAuth, isAdmin} = require ('../../config/utils');


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
        password: bcrypt.hashSync(req.body.password, 8),
        
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
    
    });
    router.post('/signin', async (req, res)=>{

        const signedinUser = await User.findOne({
            email: req.body.email,
          });
          if (
            signedinUser &&
            bcrypt.compareSync(req.body.password, signedinUser.password)
          ) {
            res.send({
                _id: signedinUser.id,
                name: signedinUser.name,
                email: signedinUser.email,
                mobile: signedinUser.mobile,
                isAdmin: signedinUser.isAdmin,
                token: getToken(signedinUser)
            })
           
        }else{
            res.status(401).send({msg: 'Invalid email or password.'})
        }
        
        });

        /* admin */

 router.get('/', async (req, res) => {
      const users = await User.find({});
      res.send(users);
    }
  );
  
 router.get('/:id',async (req, res) => {
      const user = await User.findOne({ _id: req.params.id });
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found.' });
      }
    }
  );
  
  router.put('/:id', isAuth, isAdmin, async (req, res) => {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.isAdmin = req.body.isAdmin;
        user.isSeller = req.body.isSeller;
        const updatedUser = await user.save();
        if (updatedUser) {
          return res
            .status(200)
            .send({ message: 'User Updated', data: updatedUser });
        }
      }
      return res.status(500).send({ message: ' Error in Updating User.' });
    }
  );
  
 router.delete('/:id',isAuth,isAdmin, async (req, res) => {
      const deletedUser = await User.findById(req.params.id);
      if (deletedUser) {
        await deletedUser.remove();
        res.send({ message: 'User Deleted' });
      } else {
        res.send('Error in Deletion.');
      }
    }
  );

module.exports = router;