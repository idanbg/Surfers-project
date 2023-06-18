//jshint esversion:6

const express=require("express");
const app=express();

app.get("/",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  res.send("thanks for posting that");


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
