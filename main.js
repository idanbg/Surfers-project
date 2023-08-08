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

console.log("main.js");
//app.use(express.static(__dirname + '/views/public'));
// Routes
const otherRouts = require('./backend/routs/other');
const womenRouts=require('./backend/routs/women');
const menRouter = require('./backend/routs/men');




//app.use("/register", usersRouts);
app.use("/other", otherRouts);
app.use("/shop/women", womenRouts);
app.use('/men',menRouter);

// MongoDB Connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connection Success!');
  })
  .catch((err) => {
    console.log(err);
  });



  app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.resolve('./views/homePage.html'));
  });
  
  app.get("/shop/women", function (req, res) {
    res.sendFile(path.resolve('./views/women.html'));
  });
  
  
  // app.get("/shop/men", function (req, res) {
  //   res.sendFile(path.resolve('./views/men.html'));
  // });

  
  app.get("/shop", function (req, res) {
    res.sendFile(path.resolve('./views/shop.html'));
  });

  //const LoginRouter = require('./Routers/routes/login');
  
  app.get("/logIn", function (req, res) {
    res.sendFile(path.resolve('./views/logIn.html'));
  });
  //app.use('/login',)
  
  // app.get("/logIn", function (req, res) {
  //   res.sendFile(__dirname + '/views/logIn.css');
  // });
  
  app.get("/register", function (req, res) {
    res.sendFile(path.resolve('/views/register.html'));
  });
  
  // app.get("/register", function (req, res) {
  //   res.sendFile(__dirname + '/views/logIn.css');
  // });
  
  // app.get("/style", function (req, res) {
  //   res.sendFile(__dirname + '/views/style.css');
  // });
  app.get("/shop/more", function (req, res) {
    res.sendFile(path.resolve('./views/more.html'));
  });
  app.get("/shop/shop1", function (req, res) {
    res.sendFile(path.resolve('./views/shop1.html'));
  });
  // app.get("/Logstyle", function (req, res) {
  //   res.sendFile(__dirname + '/views/log.css');
  // });
  // app.get("/Regstyle", function (req, res) {
  //   res.sendFile(__dirname + '/views/reg.css');
  // });


app.listen(3400,()=>{
    console.log("server is running http://localhost3400");
})




















//with "await" when we want to find an object we first calling it , and its going to "wait" until its finding the object, and only then going to print it, we need to add the "async" in the beginning of the function.

// app.get('/products',async (req,res)=>{
//    const productList= await Product.find();
//    if(!productList){
//     res.status(500).json({success: false})
//    }
//    res.send(productList);
//    // const product={
//     //     nameOfProduct:"blabla",
//     //     price:"12$",
//     //     picture: "12312515.com",
//     //     catagory:"somthing",
//     //     quantity:12,
//     //     gender:"male"
//     // }

//     //res.send(product);
    
// })
// app.post('/products',(req,res)=>{
//     const product=new Product({
//         nameOfProduct: req.body.name,
//         price: req.body.price,
//         category: req.body.category,
//         quantity: req.body.quantity,
//     })
//     product.save().then((createdProduct=>{
//         res.status(201).json(createdProduct)
//     })).catch((err)=>{
//         res.status(500).json({
//             error:err,
//             success:false
//         })
//     })
// })








// const product=new Product({
//     nameOfProduct: req.body.name,
//     price: req.body.price,
//     category: req.body.category,
//     quantity: req.body.quantity,
// })
// product.save().then((createdProduct=>{
//     res.status(201).json(createdProduct)
// })).catch((err)=>{
//     res.status(500).json({
//         error:err,
//         success:false
//     })
// })