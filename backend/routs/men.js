const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product"); 

// MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', async (req, res) => {
  try {
    products = await Product.find({ gender:"male", quantity: { $gt: 0 } });
    res.render('men', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const sortBy = req.body.sorting; 

    let products;
    if (sortBy === 'name') {
      products = await Product.find({ gender: "male", quantity: { $gt: 0 } }).sort({ name: 1 });
    } else if (sortBy === 'price') {
      products = await Product.find({ gender: "male", quantity: { $gt: 0 } }).sort({ price: 1 });
    } else {
      // Handle invalid sorting option
      return res.status(400).send('Invalid sorting option');
    }

    res.render('men', { products }); // Corrected template name
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

     


 router.post('/Addto', (req, res) => {
  const action = req.body.action;
  console.log(action);

  if (action) {
    const [actionType, productName] = action.split(':');

    if (actionType === 'cart') {
      // Retrieve the existing cart items from the cookie
      const existingCart = req.cookies.ProductCart || [];

      // Check if the product already exists in the cart
      const existingProductIndex = existingCart.findIndex(item => item.name === productName);

      if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        existingCart[existingProductIndex].quantity += 1;
      } else {
        // If the product doesn't exist, add it with quantity 1
        existingCart.push({ name: productName, quantity: 1 });
      }

      // Set the updated cart items to the "ProductCart" cookie
      res.cookie('ProductCart', existingCart, { maxAge: 86400000 }); // Cookie expires in 24 hours

      // Log the value of the "ProductCart" cookie
      console.log('ProductCart:', existingCart);

      res.redirect('/men'); // Redirect back to the men page
    } else if (actionType === 'wishlist') {
      // ... (similar code for wishlist functionality)
    } else {
      res.send('Invalid request');
    }
  } else {
    res.send('Invalid request');
  }
});



module.exports=router;