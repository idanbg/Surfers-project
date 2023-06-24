$(document).ready(function() {

<<<<<<< Updated upstream
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
=======
  $('#body').hide().fadeIn(1000);
    // Show modal
  $('.modal').show();
  
 

});
>>>>>>> Stashed changes
