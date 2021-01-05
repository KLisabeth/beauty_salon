const express = require ("express");
const Model = require('../../models/index');
const {Slot} = Model;

const router = express.Router();

router.get('/', async (req, res)=> {
  const slots = await Slot.find({}) 
  res.send(slots);
  });


 router.get('/:id', async (req, res) =>{
   const slot = await Slot.findOne({_id: req.params.id});
   if(slot){
     res.send(slot)
   }else{
    res.status(404).send({msg: "This time slot does not exists. "})
   }
 })

//  router.get('/:date', async (req, res) =>{
//   var slot_date = await Slot.find({slot_date:req.params.slot_date}) 
// if(slot_date){
//     res.send(slot_date)
//   }else{
//    res.status(404).send({msg: "Chosen date does not exists. "})
//   }
// })
 

  
 

module.exports = router;