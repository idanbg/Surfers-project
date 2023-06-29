//Routes
//app.use('/', express.static("views"));


app.use(bodyparser.urlencoded({extended:true}));        //to get the data from the form
app.get("/",function(req, res){                         //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/homePage.html');     
});

app.get("/shop/women",function(req, res){               //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/women.html');       
});

app.get("/shop/men",function(req, res){                 //to send the html file to the browser
  //console.log(__dirname);         
  res.sendFile(__dirname + '/views/men.html');          
});

app.get("/shop",function(req, res){                     //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/shop.html');         
}); 

app.get("/logIn",function(req, res){                    //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.html');        
});

app.get("/logIn",function(req, res){                    //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.css');         
});

app.get("/register",function(req, res){                 //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/register.html');     
});

app.get("/register",function(req, res){                 //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/logIn.css');         
});

app.get("/cart",function(req, res){
    res.sendFile(__dirname + '/views/cart.html');
});
    


app.get("/style",function(req, res){                    //to send the html file to the browser
  //console.log(__dirname);
  res.sendFile(__dirname + '/views/style.css');         
});