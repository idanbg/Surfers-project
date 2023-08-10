const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path=require('path');
const url = "mongodb+srv://Golshim123:Golshim123@webdevproject.k2obzer.mongodb.net/surfDB";
// Serve static files from the 'public' folder
app.use(express.static('views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB Connection
console.log("main.js");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connection Success!');
  })
  .catch((err) => {
    console.log(err);
  });


  //routes
const homeRouts = require('./backend/routs/homePage');
app.use("/", homeRouts);

const otherRouts = require('./backend/routs/other');
app.use("/other", otherRouts);

const cartRouts = require('./backend/routs/cart');
app.use("/cart", cartRouts);

const womenRouts=require('./backend/routs/women');
app.use("/women", womenRouts);

const menRouter = require('./backend/routs/men');
app.use('/men',menRouter);

const show1Router = require('./backend/routs/show1product');
app.use('/show1product',show1Router);

const searchRouter = require('./backend/routs/search');
app.use('/search',searchRouter);

const loginRouter = require('./backend/routs/login');
app.use('/login',loginRouter);

// const wishRouter = require('./backend/routs/wishlist');
// app.use('/wishlist',wishRouter);


const adminRouter = require('./backend/routs/admin');
app.use('/admin',adminRouter);

const registerRouter = require('./backend/routs/register');
app.use('/register',registerRouter);

const addproductRouter = require('./backend/routs/register');
app.use('/addproduct',addproductRouter);

  //connect to server
app.listen(3400,()=>{
    console.log("server is running http://localhost3400");
});