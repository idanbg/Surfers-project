//jshint esversion:6
//creating a server
const express = require('express')
const app = express()
const http = require('http')//taking data from the web. 
const server = http.createServer(app)//creating the server web
const myDB = require("./db")//a way to reach to db.js
const io = require('socket.io')(server);//connecting between the server and the client
//server.listen(3000);









//Routes
app.use('/', express.static("pages"));

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

