const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const cookieParser = require('cookie-parser');

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());


router.get('/', (req, res) => {
    const username = req.cookies.username;
    const permission = req.cookies.Permission;
    console.log(username);
    if (username) {
        console.log(username);
      res.render('homePage', { status: username,permission:permission });
    } else {
      res.render('homePage', { status: 'Guest' ,permission:0 });
    }
});


//Deleting the Data from coockies
router.post('/delCk',async(req,res)=>{
  console.log('Log Out ');
  var cookies = req.cookies;
  for (var cookieName in cookies) {
    res.clearCookie(cookieName);
  }
  //res.render('homePage');

   res.render('homePage',{status:'Guest',permission:0});
})




module.exports=router;