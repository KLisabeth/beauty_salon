const express = require ("express");
const Model = require('../../models/index');
const {Service, Category} = Model;
const {isAdmin, isAuth} = require ('../../config/utils')

const router = express.Router();


/*All services*/ 

router.get('/', async (req, res) =>{
    const services = await Service.find({})
    res.send(services)
});




router.post('/', async (req, res) =>{
  const newCategory = await new Category({
    category: req.body.category
  });
  newCategory.save();
   const service = new Service({
    name: req.body.name,
    categories: newCategory._id,
    price: req.body.price,
    description: req.body.description,
    timeSlotMinutes: req.body.timeSlotMinutes,
   });
  const newService = await service.save();
  if(newService){
   return res.status(201).send({msg: "New Service has been created", data: newService})
  }
  return res.status(500).send({msg: "Error in creating service"})
});

router.get('/:id', async (req, res) =>{
  const service = await Service.findOne({_id: req.params.id});
  if(service){
    res.send(service)
  }else{
    res.status(404).send({msg: "This service does not exists. "})
  }
  
});

// router.put('/:id', isAuth , isAdmin, async (req, res) =>{
//   const serviceId = req.params.id
//   const service = await Service.findById({_id: serviceId});
//   if(service){
//    service.name = req.body.name;
//    service.categories = newCategory._id,
//    service.price = req.body.price;
//    service.description = req.body.description;
//    service.timeSlotMinutes = req.body.timeSlotMinutes;
//    const updatedService = await service.save();
//    if(updatedService){
//   return res.status(200).send({msg: "This service has been edited", data: updatedService})
//  }
//   }
//   return res.status(500).send({msg: "Error in editing service"}) 
// });

router.delete("/:id", isAuth , isAdmin, async (req, res)=>{
  const deletedService = await Service.findById(req.params.id);
  if(deletedService){
    await deletedService.remove();
    res.send({massage: "Service deleted"})
  }else
  res.send("Error accrued of deleting this service ")
})

module.exports = router;