//creating a server
const express = require('express');
const bodyparser=require('body-parser');
const app = express();
const http = require('http');//taking data from the web. 
const myDB = require("./backend/config/db");//a way to reach to db.js
app.set('view engine', 'ejs');

app.listen(3000,()=>{
  console.log("port 3000")
});

//Routes
//app.use('/', express.static("views"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/homePage.html');
});
app.get("/shop/women",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/women.html');
});
app.get("/shop/men",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/men.html');
});
app.get("/shop",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/shop.html');
});
app.get("/logIn",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.html');
});
app.get("/logIn",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.css');
});
app.get("/register",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/register.html');
});
app.get("/register",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.css');
});
app.get("/style",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/style.css');
});


 



 const { addClient } = require("./backend/config/db");
 app.post("/register",function(req,res){

  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  addClient(name,email,password);
  res.redirect("/");
  
 })
// function addClient(Name,Email,Password){
//   let instert= new Client({
//     name:Name,
//     email:Email,
//     password:Password
//   })
//   console.log("success");
// }