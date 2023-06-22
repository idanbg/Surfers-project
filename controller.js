//jshint esversion:6
//creating a server
const express = require('express');
const bodyparser=require('body-parser');
const app = express();
const http = require('http');//taking data from the web. 
const server = http.createServer(app);//creating the server web
const myDB = require("./db");//a way to reach to db.js
const Client = require("./db").Client
const io = require('socket.io')(server);//connecting between the server and the client
//server.listen(3000);

//Routes
app.use('/', express.static("pages"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/homePage.html');
});
app.get("/shop/women",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/women.html');
});
app.get("/shop/men",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/men.html');
});
app.get("/shop",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/shop.html');
});
app.get("/logIn",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/logIn.html');
});
app.get("/logIn",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/logIn.css');
});
app.get("/register",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/register.html');
});
app.get("/register",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/logIn.css');
});
app.get("/style",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/style.css');
});


 app.listen(3000,function(){
   console.log("Server is running on port 3000");
 });





 const { addClient } = require("./db");
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