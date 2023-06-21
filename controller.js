//jshint esversion:6
//creating a server
// let express = require('express')
//     , app = express()
//     , http = require('http')//taking data from diffrents websites - need it for the- maps, weather ... 
//     , server = http.createServer(app)
//     , myDB = require("./db")
//     , io = require('socket.io')(server);
// server.listen(8080);
const express=require('express');
app=express();

app.get("/",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/homePage.html');
});
app.get("/women",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/women.html');
});
app.get("/men",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/men.html');
});
app.get("/products",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/products.html');
});
app.get("/logIn",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/logIn.html');
});
app.get("/logIn.css",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/logIn.css');
});
app.get("/style.css",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/style.css');
});
app.listen(3000,function(){
  console.log("Server is running on port 3000");
});

app.use('/', express.static("pages"));