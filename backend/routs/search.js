const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product"); 

const publicPath = path.join(__dirname, '../public');

// Add bodyParser and cookieParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(publicPath));


router.get('/', async (req, res) => {
    res.render('search'); // Assuming you have a search.ejs view file
  });
  
  // POST route for searching products
  // POST route for searching products
  router.post('/search', async (req, res) => {
      try {
        const searchValue = req.body.searchValue;
        const products = await Product.find({ name: { $regex: searchValue, $options: 'i' } }).limit(10);
        res.json(products);
      } catch (error) {
        console.error("Failed to search products:", error);
        res.status(500).json({ error: "Failed to search products" });
      }
    });
    
  

  module.exports = router;
