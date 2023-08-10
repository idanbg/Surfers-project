const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const cookieParser = require('cookie-parser');
const Users=require("../models/user");

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', async (req, res) => {
  const username = req.cookies.username;
  const redirectURL = req.headers.referer || '/'; // Capture the referring URL

  if (username) {
    console.log(username);
    res.render('login', { naming: username, redirectURL: redirectURL });
  } else {
    res.render('login', { naming: 'Guest', redirectURL: redirectURL });
  }
});


// router.get('/', async (req, res) => {
//     const username=req.cookies.username;
//     if(username)
//     {
//       console.log(username);
//       res.render('login',{naming:username});
//     }
//     else
//     res.render('login',{naming:'Guest'});

//   }
// );


router.post('/', async (req, res) => {
    const {name,password}=req.body;                                        // get the email and password from the request body
    const redirectURL = req.body.redirectURL || '/';                          // print the email and password
    console.log(password);                                                  // print the email and password
    try {
        const user = await Users.findOne({  name:name });                        // Find the user by email
        if (!user) {                                                        // If the user does not exist
          return res.render('login', { error: 'Invalid UserName' });         // Return an error
        }
                      // Validate the password
     if (user.password!=password) {                                                     // If the password is invalid
      return res.render('login', { error: 'Wrong Password' });    // Return an error
      }
    if( user.permission===0){ 
      console.log("succsses");  
        res.redirect(redirectURL);
    }
    else{
        res.redirect('/admin');
    }
    //res.redirect('/');                                                          // Redirect to the home page or dashboard
} catch (error) {                                                               // If an error occurred
  console.error(error);                                                         // Log the error
  res.status(500).render('login', { error: 'Internal server error' });          // Return a server error
}
});

module.exports=router;

