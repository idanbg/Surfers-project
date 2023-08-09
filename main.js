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
const otherRouts = require('./backend/routs/other');
app.use("/other", otherRouts);


const womenRouts=require('./backend/routs/women');
app.use("/women", womenRouts);


const menRouter = require('./backend/routs/men');
app.use('/men',menRouter);

const loginRouter = require('./backend/routs/login');
app.use('/login',loginRouter);


// const homeRouter = require('./backend/routs/men');
// app.use('/',homeRouter);

  app.get("/", function (req, res) {
    console.log(__dirname);
    //res.render(__dirname + '/views/homePage.ejs');
    res.render(__dirname + '/views/login');
  });
  
  // const LoginRouter = require('./Routers/routes/login');
  // app.use('/login',)

  app.get("/login", function (req, res) {
    res.render(__dirname + '/views/login.ejs');
  });
  app.get("/login", function (req, res) {
    res.render(__dirname + '/views/log.css');
  });
  app.get("/register", function (req, res) {
    res.render(__dirname + '/views/register.ejs');
  });
  app.get("/register", function (req, res) {
    res.render(__dirname + '/views/log.css');
  });
  
  // app.get("/style", function (req, res) {
  //   res.sendFile(__dirname + '/views/style.css');
  // });
  



  //connect to server
app.listen(3400,()=>{
    console.log("server is running http://localhost3400");
});