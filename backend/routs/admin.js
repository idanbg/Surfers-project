const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product");
const Order = require("../models/order"); // Import the Order model

// MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

/// Inside your router
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); 
    const orders = await Order.find();
    const ordersByProductName = {}; 

    // Calculate orders by product name
    orders.forEach(order => {
      const productName = order.productName; // Use order.productName
      if (!ordersByProductName[productName]) {
        ordersByProductName[productName] = 1;
      } else {
        ordersByProductName[productName]++;
      }
    });

    res.render('admin', { products, ordersByProductName }); // Pass ordersByProductName
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add a new product
router.post('/add', (req, res) => {
    const { name, price, picture, category, quantity, gender } = req.body;
    const newProduct = new Product({
      name: name || "Default Product Name",
      price: price || 0,
      picture: picture || "./default-picture.jpg",
      category: category || "More",
      quantity: quantity || 0,
      gender: gender || "unisex"
    });
  
    newProduct.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.redirect('/admin');
    });
  });
  

// Delete a product
router.post('/delete/:id', (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/admin');
  });
});

// Update a product
router.post('/update/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price, picture, category, quantity, gender } = req.body;
    
    // Create an object with the updated details
    const updatedProduct = {
      name,
      price,
      picture,
      category,
      quantity,
      gender
    };
    
    Product.findByIdAndUpdate(productId, updatedProduct, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.redirect('/admin');
    });
  });
  

module.exports = router;
