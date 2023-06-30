const mongoose = require('mongoose');

// Define the Product schema
const myschema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    gender:{
        type: String,
        // enum:1,2,3,
    },
  }, { versionKey: false });
// Create the Product model using the schema
const Product = mongoose.model('Product', myschema);

module.exports = Product;




