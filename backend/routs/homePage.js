const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', async (req, res) => {
    console.log("homePage");
   res.render('homePage');
});

module.exports=router;