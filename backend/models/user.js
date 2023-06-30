const mongoose = require('mongoose');
console.log("hey");
// Define the user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true 
    },
    password:{
        type: String,
        required: true,
    },
    city:{
         type:String,
         required:true
    },
    street:{
        type:String,
        required:true
    },
    streetNum:{
         type:Number,
         required:true
    },
    permission: {
        type: Number,
        default:0  // "0" for user, "1" admin
    },
});

//userSchema.virtual('id').get(function(){ // to get the id of the user "id" insead of - "_id"
    //return this._id.toHexString();
//})
//userSchema.set('toJSON',{//enable the virtual of the schema
    virtuals:true
//})
// Create the user model using the schema
const User=mongoose.model("users",userSchema);

// Export the user model
module.exports = User;
//module.exports= userSchema;