//jshint esversion:6
//creating a server
let express = require('express');
let bodyparser=require('body-parser');
let app = express();
let http = require('http');//taking data from the web. 
let server = http.createServer(app);//creating the server web
let myDB = require("./db");//a way to reach to db.js
//const Client = require("./db").Client
let io = require('socket.io')(server);//connecting between the server and the client
server.listen(8080);
console.log("controller");

io.sockets.on('connection',function(socket){//new client connection
  
  console.log(socket.id);
  

  socket.on('register',function(name,email,pw) {
     let valid=myDB.addClient(name,email,pw);

    if(valid===1){
      socket.emit('success-register',name);
    }
    else
      socket.emit('failed-register');

  })
});





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
app.get("/shop/more",function(req, res){
  //console.log(__dirname);
  res.sendFile(__dirname + '/pages/more.html');
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