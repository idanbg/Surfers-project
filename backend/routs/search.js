const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product"); 

router.get('/', (req, res) => {
    const query = req.query.query; // Get the search query from the URL query parameters
  
    if (query) {
      // Filter the items based on the search query
      const searchResults = allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      res.render('search', { searchResults });
    } else {
      // If no query provided, render the search page without results
      res.render('search', { searchResults: null });
    }
  });




  module.exports = router;
