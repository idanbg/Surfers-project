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

/////////////////CLIENT//////////////
const clientStructor= new mongo.Schema({
    name:{

        type:String,
        required:[true,"Please add name"]
    },
    email:
    { type:String,
        required:[true,"Please add email"] },
    password:
    { type:Number,
       min:5,
       max:10 
    },
    cart: CartSchema,
    order: OrderSchema
});

const Client=mongo.model("client",clientStructor);//naming the collection "client"

// const client = new Client({
//     name:"Idan Barhom",
//     email: "Idan.barhom@gmail.com",
//     password: 12345
// });

//client.save();

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

//testing

// const product = new Product({
//     id: 2,
//     type: "Bikini",
//     price: 45.99
// });
////////////////////CART////////////////
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



















// const productSchema=new mongo.Schema ({// what in the collection
//     name: String,
//     Price: Number,
//     Gender: String
// });

// const product=mongo.model("product",productSchema); // creates the collection

// const prod =new product({
//     name: "Shirt",
//     Price: 24.99,
//     Gender: "Male"
// });

// testing.save();