const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const url = "mongodb+srv://Golshim123:Golshim123@webdevproject.k2obzer.mongodb.net/surfDB";
// Serve static files from the 'public' folder
app.use(express.static('views'));

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const productsRouts = require('./backend/routs/products');
const usersRouts = require('./backend/routs/users');
const ordersRouts = require('./backend/routs/orders');
const orderItemsRouts=require('./backend/routs/orderitems')

console.log("hello");
app.use("/products", productsRouts);
app.use("/user", usersRouts);
app.use("/orders", ordersRouts);
app.use("/orderitems", orderItemsRouts);

// MongoDB Connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connection Success!');
  })
  .catch((err) => {
    console.log(err);
  });



  app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/homePage.html');
  });
  
  app.get("/shop/women", function (req, res) {
    res.sendFile(__dirname + '/views/women.html');
  });
  
  app.get("/shop/men", function (req, res) {
    res.sendFile(__dirname + '/views/men.html');
  });
  
  app.get("/shop", function (req, res) {
    res.sendFile(__dirname + '/views/shop.html');
  });
  
  app.get("/logIn", function (req, res) {
    res.sendFile(__dirname + '/views/logIn.html');
  });
  
  app.get("/logIn", function (req, res) {
    res.sendFile(__dirname + '/views/logIn.css');
  });
  
  app.get("/register", function (req, res) {
    res.sendFile(__dirname + '/views/register.html');
  });
  
  app.get("/register", function (req, res) {
    res.sendFile(__dirname + '/views/logIn.css');
  });
  
  app.get("/style", function (req, res) {
    res.sendFile(__dirname + '/views/style.css');
  });
  app.get("/shop/more", function (req, res) {
    res.sendFile(__dirname + '/views/more.html');
  });

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