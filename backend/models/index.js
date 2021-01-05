const mongoose = require('mongoose');

const Schema = mongoose.Schema,

  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

  const categorySchema = new Schema ({
    category: String,
  });

const Category = model('Category', categorySchema);

  const serviceSchema = new mongoose.Schema(
   {    
      id: ObjectId,
      name: {type:String, required: true},
      categories: {type: ObjectId, ref: 'Category'},
      price:{type: Number, default: 0, required:true},
      description: { type: String,required:true},
      timeSlotMinutes: {type: Number, required:true},
    });

    const Service = model('Service', serviceSchema);

  const slotSchema = new Schema ({
    slot_time:  String,
    slot_date:  String,
    created_at: Date
  });

const Slot = model('Slot', slotSchema);


const appointmentSchema = new Schema({
  id: ObjectId,
  name: {type: String, required:true},
  email:{type:String, required:true, match: /.+\@.+\..+/, unique: true},
  phone:{type: Number, trim: true, required:true},
  categories:{type: ObjectId, ref: 'Category'},
  slots:{type: ObjectId, ref: 'Slot'},
  created_at: Date
});

const Appointment = model('Appointment', appointmentSchema);

const userSchema = new Schema({
    name: {type: String, required:true},
    email:{type:String, required:true, match: /.+\@.+\..+/, unique: true},
    phone:{type: Number, trim: true, required:true},
    password:{type: String, required: true},
    isAdmin: {type: Boolean, required: true, default:false}
});
const User = model("User", userSchema);

module.exports = {
  Appointment, Slot, Category, Service, User
};
