const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  ordernumber: Number,
  productName: String,
  price: Number,
  picture: String,
  quantity: Number
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;