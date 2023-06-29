const mongoose = require('mongoose');

// Define the Product schema
const myschema = new mongoose.Schema({
    nameOfProduct: {
      type: String,
      required: true,
    },
    price: {
      type: String,
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
        type: String
    },
  }, { versionKey: false });
// Create the Product model using the schema
const Product = mongoose.model('Product', myschema);

module.exports = Product;




