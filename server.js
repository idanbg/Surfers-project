const io=require("socket.io")(3000,{
  cors:{
    origin:["http://localhost:8080"]
  },
})
io.on("connection",socket=>{
  console.log(socket.id);
})
console.log("modle.js")
//$=document.querySelector
socket.on('success-register', function(name) {
    console.log("modle.js")
    $('#cart').empty().append('<div class="dropstart" id="cart"> <div class="dropdown-menu"><form id="cart"></form></div></div>');
    $('#user-name').text('Hello ' + name);
  });
  window.location.href = "/";
// $(function() {

$('#signUp').click(function (){

    const name = ($('#name').val());
    console.log(name);
    const email = $('#email').val();
    console.log(email);
    const password = $('#password').val();
    console.log(password);
    
    socket.emit('register',name,email,password);
})
// })






