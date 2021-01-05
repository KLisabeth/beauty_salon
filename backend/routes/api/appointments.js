const express = require ("express");
const Model = require('../../models/index');
const {Appointment, Slot} = Model
const Nexmo = require("nexmo");

const key = require ('../../config/key').api_Key;
const secret = require ('../../config/key').api_Secret;

const router = express.Router();

router.get('/', async (req, res)=> {
const appointments = await Appointment.find({}) 
res.send(appointments);
});



router.post('/', async (req, res)=>{
 
  const newSlot = await new Slot({
    slot_time: req.body.slot_time,
    slot_date: req.body.slot_date,
    created_at: Date.now()
  });
  newSlot.save();

const appointments = await new Appointment({
  name: req.body.name,
  email: req.body.email,
  phone: req.body.phone,
  slots: newSlot._id
});
const nexmo = new Nexmo({
  apiKey: key,
  apiSecret: secret,
  
  
});



appointments.save(() => {
  let msg =
  req.body.name +
  " " +
  "this message is to confirm your appointment at PrettyWoman for" +
  " " +
  req.body.slot_date;
  
  const from = 'PrettyWoman';
  const to = req.body.phone;
  nexmo.message.sendSms(from, to, msg, );
});
if(appointments){
  return res.status(201).send({msg: "New Appointment has been created", appointment: appointments})
 }
 return res.status(500).send({msg: "Error in creating appointment"})
});


 



module.exports = router;