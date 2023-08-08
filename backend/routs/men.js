const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const Product=require("../data/products");

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));

console.log("hey");