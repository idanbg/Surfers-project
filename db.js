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
    name: String,
    email:String,
    password: Number
});

const Client=mongo.model("client",clientStructor);

const client = new Client({
    name:"Idan Barhom",
    email: "Idan.barhom@gmail.com",
    password: 12345
});

//client.save();

///////////PRODUCT///////////////
const productStructor= new mongo.Schema({
    id: Number,
    type:String,
    price: Number
});

const Product=mongo.model("product",productStructor);

const product = new Product({
    id: 2,
    type: "Bikini",
    price: 45.99
});

product.save();



















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