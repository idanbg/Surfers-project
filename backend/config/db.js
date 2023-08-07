const mongo=require('mongoose');//need to call the DB
const url="mongodb+srv://Golshim123:Golshim123@webdevproject.k2obzer.mongodb.net/surfDB"//calling the wanted DB
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
// const productStructor= new mongo.Schema({
//     id:{type: Number,
//         min:1,
//         max:10},
//     type:{type:String,
//         required:[true]},
//     price:{type: Number,
//         min:1}
// });

// const Product=mongo.model("product",productStructor);//naming the collection "product"

// ///////////////////CART////////////////
// const CartStructor= new mongo.Schema({
//     product:{type:productStructor,
//         required:[true]}
// });

// const Cart=mongo.model("cart",productStructor);//naming the collection "product"

// const cart = new Cart({
//     product:productStructor
// });
// ///////////////////ORDERS////////////////////////
// const OrderStructor= new mongo.Schema({
//     orderID:{type: Number,
//         min:1,
//         max:10},
//     price:{type: Number,
//         min:1},
//         items:{type:CartStructor,
//             required:[true]}
        
// });

// const Order=mongo.model("order",productStructor);//naming the collection "product"
// const order = new Order({
//     orderID:2,
//     price:24.99,
//     //items: cart     /// cart collection

// });
// /////////////////CLIENT//////////////
// //const adminStructor= new mongo.Schema


// const clientStructor= new mongo.Schema({
//     name:{

//         type:String,
//         required:[true,"Please add name"]
//     },
//     email:
//     { type:String,
//         required:[true,"Please add email"] },
//     password: {
//     type: String,
//     required: true,
//     },
//     role: {
//         type: String,
//         default: 'user', // by default role is 'user'
//         enum: ['user', 'admin'] // 'role' can be either 'user' or 'admin'
//     },
// });
// const Client=mongo.model("client",clientStructor);//naming the collection "client"










////////////////////Functions/////////////////////////////////////////////


// let addClient= function(Name,Email,Password){
//    // first checking if the name or email is taken if so, we need to send a message that there is an error.
//     Client.findOne({ $or: [{ name: Name }, { email: Email }] }, function(err, existingClient) {
//     if (err) {
//       console.error(err);
//       throw err;
//     }

//     if (existingClient) {
//       console.log("Name or email already taken");
//       return 0;
//     }

//     // If the name and email are not taken, create and save the new client
//     let newClient = new Client({
//       name: Name,
//       email: Email,
//       password: Password
//     });

//     newClient.save(function(err) {
//       if (err) {
//         console.error(err);
//         return 0;
//       } else {
//         console.log("Client added successfully");
//         return 1;
//       }
//     });
// });
// };

// // let logInClient=function(Name,Password){
// // }


// ///////////////EXPORTS/////////////////////////////////////
// module.exports.addClient= addClient;


module.exports=mongo;