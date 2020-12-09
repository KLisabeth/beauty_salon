const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {type: String, required:true},
    email:{type:String, required:true, match: /.+\@.+\..+/, unique: true, dropDups: true},
    mobile:{type: String, trim: true, required:true, match: [/^\+?\d+[\d\s]+$/, 'Please fill a valid telephone number']},
    password:{type: String, required: true},
    isAdmin: {type: Boolean, required: true, default:false}
});

// userSchema.pre('save', async function(next){
// try {
//     const salt = await bcrypt.genSalt(10)
//     const hashPassword = await bcrypt.hash(this.password, salt)
//     this.password = hashPassword
//     next()
// } catch (error) {
//     next(error)
// }

// })
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;