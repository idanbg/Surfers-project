const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path'); 
const cookieParser = require('cookie-parser');
const Product = require("../models/product"); 
const order = require("../models/order"); 

// MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', async (req, res) => {
    
    const totalPrice=req.cookie.totalPrice ;
    console.log(price);
    res.render('check',{totalPrice:totalPrice});
    
});

router.post('/', async (req, res) => {
    console.log("Pay");
  
      const cartItems = req.cookies.ProductCart || [];
      const username = req.cookies.username;
  
      // Check if the user is logged in
      if (!username) {
        // User is not logged in, redirect to the signup page
        res.clearCookie('ProductCart');
        return res.redirect('/signup');
      }
  
      try {
        const orderNumber = Math.floor(Math.random() * 1000000);
        const orderItems = [];
  
        for (const cartItem of cartItems) {
          const productName = cartItem.name; // Retrieve the product name from the cart item
  
          const product = await Product.findOne({ name: { $in: productName } });
  
          if (product) {
            const selectedQuantity = parseInt(cartItem.quantity); // Use the quantity from the cart item
  
            if (selectedQuantity > 0 && selectedQuantity <= product.quantity) {
              // Update the quantity of the product in the cart
              cartItem.quantity = selectedQuantity;
  
              // Subtract the ordered quantity from the product quantity in the database
              product.quantity -= selectedQuantity;
  
              // Save the updated product in the database
              await product.save();
  
              const orderItem = {
                name: username,
                ordernumber: orderNumber,
                productName: product.name,
                price: product.price,
                picture: product.picture,
                quantity: selectedQuantity
              };
  
              orderItems.push(orderItem);
            } else {
              // Insufficient quantity or invalid selected quantity, handle accordingly (e.g., show error message)
              console.error('Insufficient quantity or invalid selected quantity for:', productName);
            }
          } else {
            // Product not found, handle accordingly (e.g., show error message)
            console.error('Product not found:', productName);
          }
        }

        await order.insertMany(orderItems);
        res.clearCookie('ProductCart');
        res.redirect('/orders');
      } catch (error) {
        console.error('Error adding order to database:', error);
        res.send('Error adding order to database');
      }
  });







module.exports=router;