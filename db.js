const mongo=require('mongoose');//need to call the DB
const url="mongodb://0.0.0.0:27017/surfDB"//calling the wanted DB
console.log("hey");
 //await mongoose.connect("mongodb://localhost:27017/surfDB");
mongo.connect(url,(err)=>{
    if (!err)
    console.log('MongoDB connection succeeded');
    else
    console.log('Error connection MongoDB:'+err);

});

////////COLLECTION STRUCTURE//////////////////////

///////////PRODUCT///////////////
const productStructor= new mongo.Schema({
    id:{type: Number,
        min:1,
        max:10},
    type:{type:String,
        required:[true]},
    price:{type: Number,
        min:1}
});

const Product=mongo.model("product",productStructor);//naming the collection "product"

///////////////////CART////////////////
const CartStructor= new mongo.Schema({
    product:{type:productStructor,
        required:[true]}
});

const Cart=mongo.model("cart",productStructor);//naming the collection "product"

const cart = new Cart({
    product:productStructor
});
///////////////////ORDERS////////////////////////
const OrderStructor= new mongo.Schema({
    orderID:{type: Number,
        min:1,
        max:10},
    price:{type: Number,
        min:1},
        items:{type:CartStructor,
            required:[true]}
        
});

const Order=mongo.model("order",productStructor);//naming the collection "product"

const order = new Order({
    orderID:2,
    price:24.99,
    //items: cart     /// cart collection

});
/////////////////CLIENT//////////////
const clientStructor= new mongo.Schema({
    name:{

        type:String,
        required:[true,"Please add name"]
    },
    email:
    { type:String,
        required:[true,"Please add email"] },
    password: {
    type: String,
    required: true,
},
});
const Client=mongo.model("client",clientStructor);//naming the collection "client"










////////////////////Functions/////////////////////////////////////////////


let addClient= function(Name,Email,Password){
   //console.log(Name);
    //console.log(Email);
    //console.log(Password);
    let add = new Client({
      name:Name,
      email:Email,
      password:Password
    });
    add.save(function(err){
        if(err)console.error(err);
        else
        console.log("Client Added succesFully");
    })
    
}

// let logInClient=function(Name,Password){
// }


///////////////EXPORTS/////////////////////////////////////
module.exports.addClient= addClient;