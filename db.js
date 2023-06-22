const mongo=require('mongodb');//need to call the DB
//const url="mongodb://localhost:27017/surfDB"//calling the wanted DB
mongo.connect("mongodb://localhost:27017/surfDB");
const productSchema=new mongo.Schema ({// what in the collection
    name: String,
    Price: Number,
    Gender: String
});

const product=mongo.model("product",productSchema); // creates the collection

const prod =new product({
    name: "Shirt",
    Price: 24.99,
    Gender: "Male"
});

testing.save();