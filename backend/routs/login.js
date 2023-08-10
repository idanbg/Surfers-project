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

  if (username) {
    console.log(username);
    res.render('login', { status: username });
  } else {
    res.render('login', { status: 'Guest' });
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
    const name=req.body.name.trim();
    const password=req.body.password;                                        // get the email and password from the request body
    try {
        const user = await Users.findOne({  name:name }); 
                              // Find the user by email
                               // Find the user by email
        if (!user) {                                                        // If the user does not exist
          return res.render('login', { error: 'Invalid UserName' });         // Return an error
        }
                      // Validate the password
     if (user.password!=password) {                                                     // If the password is invalid
      return res.render('login', { error: 'Wrong Password' });    // Return an error
      }
      res.cookie('username',name);
      res.cookie('permission',user.permission);
      res.render('homePage', { 
        status: user.name || 'Guest',
        permission: user.permission || 0 
    });
    
    
    //res.redirect('/');                                                          // Redirect to the home page or dashboard
} catch (error) {                                                               // If an error occurred
  console.error(error);                                                         // Log the error
  res.status(500).render('login', { error: 'Internal server error' });          // Return a server error
}
});

module.exports=router;

