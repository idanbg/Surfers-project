const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product"); 

// MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());


// Display the admin panel
router.get('/', (req, res) => {
  // Fetch products from the database
  Product.find({}, (err, products) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.render('admin', { products }); // Render the admin page with product data
  });
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
