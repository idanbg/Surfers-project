const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Product = require("../models/product");

// Add bodyParser and cookieParser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', async (req, res) => {
  const cartItems = req.cookies.ProductCart || [];
  console.log(cartItems);
  try {
    const productNames = cartItems.map(item => item.name);
    const products = await Product.find({ name: { $in: productNames } });

    res.render('cart', { cartItems, products });
  } catch (error) {
    console.error('Error retrieving product data:', error);
    res.send('Error retrieving product data');
  }
});

router.post('/', async (req, res) => {
  const buttonText = req.body.action;
      
  if (buttonText === 'delete') {
    const { itemName } = req.body;
    const cartItems = req.cookies.ProductCart || [];

    const itemIndex = cartItems.findIndex(item => item.name === itemName);

    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
    }

    res.cookie('ProductCart', cartItems);
    res.redirect('/cart');
  } else if (buttonText === 'Q') {
    const itemName = req.body.itemName2;
    const quantity = req.body[`quantity-${itemName}`];

    const cartItems = req.cookies.ProductCart || [];
    const itemIndex = cartItems.findIndex(item => item.name === itemName);

    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity = parseInt(quantity);
    }

    res.cookie('ProductCart', cartItems);
    res.redirect('/cart');
  } else {
    const cartItems = req.cookies.ProductCart || [];
    const username = req.cookies.username;

    if (!username) {
      res.clearCookie('ProductCart');
      return res.redirect('/signup');
    }

    try {
      const orderNumber = Math.floor(Math.random() * 1000000);
      const orderItems = [];

      for (const cartItem of cartItems) {
        const productName = cartItem.name;

        const product = await Product.findOne({ name: productName });

        if (product) {
          const selectedQuantity = parseInt(cartItem.quantity);

          if (selectedQuantity > 0 && selectedQuantity <= product.quantity) {
            cartItem.quantity = selectedQuantity;
            product.quantity -= selectedQuantity;
            await product.save();

            const orderItem = {
              name: username,
              ordernumber: orderNumber,
              'name of product': product.name,
              price: product.price,
              picture: product.picture,
              quantity: selectedQuantity
            };

            orderItems.push(orderItem);
          } else {
            console.error('Insufficient quantity or invalid selected quantity for:', productName);
          }
        } else {
          console.error('Product not found:', productName);
        }
      }

      // Assuming you have an Order model for saving orders
      // await Order.insertMany(orderItems);

      res.clearCookie('ProductCart');
      res.redirect('/cart');
    } catch (error) {
      console.error('Error adding order to database:', error);
      res.send('Error adding order to database');
    }
  }
});
    
module.exports = router;
