const mongo=require('mongoose');//need to call the DB
const url="mongodb://localhost:27017/surfDB"//calling the wanted DB
console.log("hey");
 //await mongoose.connect("mongodb://localhost:27017/surfDB");
mongo.connect("mongodb://localhost:27017",{usedNewUrlParser:true},(err)=>{
    if (!err){console.log('MongoDB connection succeeded')}
    else{console.log('Error connection MongoDB:'+err)}

});


//mongo.use(express.urlencoded({extended:false}));





















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