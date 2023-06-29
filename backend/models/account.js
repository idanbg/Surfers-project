const mongoose = require('mongoose');
console.log("hey");
// Define the user schema
const accountSchema= new mongoose.Schema({
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
        type: Number  // "0" for user, "1" client
    },
});

// Create the user model using the schema
const Account=mongoose.model("accounts",accountSchema);

// Export the user model
module.exports = Account;