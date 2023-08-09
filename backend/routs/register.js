const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const User=require("../models/user");


//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());


router.get('/', async (req, res) => {
    console.log("register");
    res.render('register');
  }
);

router.post('/', async (req, res) => {
    console.log('');
    const checking = await User.find({});
    const data = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      permission: 0
    };
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      // Valid email address
      console.log("Email is valid");
      let userExists = false;
      for (var i = 0; i < checking.length; i++) {
        if (checking[i].name === req.body.name) {
          userExists = true;
          break;
        }
      }
      if (userExists) {
        res.send("User details already exist");
      } else {
        console.log(data);
        await User.insertMany([data]);
        //res.status(201).render("home", { naming: req.body.name , permission:0});
        res.status(201).render("homePage");
      
    }
    } else {
      // Invalid email address
      console.log("Email is invalid");
      res.send("Invalid email address");
    }
  });
  
module.exports = router;




// router.post('/',async(req,res)=>{
//     console.log("Password from request body:", req.body.password);
//     let user = new User({
//         name: req.body.name,
//         email:req.body.email,
//         password:bcrypt.hashSync(req.body.password,10),
//         permission:0
//     })
//     user =await user.save();
//     if (!user)
//     return res.status(404).send('error creating user ')
    
//     res.json({message: "hey"});
// })