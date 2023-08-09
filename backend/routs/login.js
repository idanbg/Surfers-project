const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const Users=require("../models/user");

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));

console.log("login");

router.get('/', async (req, res) => {
    res.render('login');
  }
);


router.post('/', async (req, res) => {
    console.log("login 123 ");
    const {name,password}=req.body;                                        // get the email and password from the request body
    console.log(name);                                                     // print the email and password
    console.log(password);                                                  // print the email and password
    try {
        const user = await Users.findOne({  name:name });                        // Find the user by email
        if (!user) {                                                        // If the user does not exist
          return res.status(400).render('login', { error: 'Invalid password' });         // Return an error
        }


    // const isValidPassword = await user.validatePassword(password);              // Validate the password

    // if (!isValidPassword) {                                                     // If the password is invalid
    //  return res.status(400).render('login', { error: 'Invalid password' });    // Return an error
    //}
    if( user.permission===0){ 
        res.render('homePage');
    }
    else{
        res.render('admin');
    }
    //res.redirect('/');                                                          // Redirect to the home page or dashboard
} catch (error) {                                                               // If an error occurred
  console.error(error);                                                         // Log the error
  res.status(500).render('login', { error: 'Internal server error' });          // Return a server error
}
});

module.exports=router;

