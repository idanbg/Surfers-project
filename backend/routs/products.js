const Product=require('../models/product');
const express=require('express')
const router=express.Router();


router.get('/products',async(req,res)=>{
    console.log("heyyyyy");
    const somthing=await Product.find();

    if(!somthing){
        res.status(500).json({success:false})
    }
    res.send(somthing);
})




module.exports=router;















// const products=[
//     {
//         nameOfProduct: "Omega 3/2 Back Zip Wetsuit" ,
//         price: 179.95 ,
//         picture: "./pics/men-wetsuit.webp",
//         catagory:"Wetsuits" ,
//         quantity: 123 ,
//         gender: "male"  
//     },
//     {
//         nameOfProduct: "E-Bomb 4/3 Zip Free Hooded Wetsuit" ,
//         price: 258.99 ,
//         picture:"./pics/men-fullwetsuit.webp",
//         catagory: "Wetsuits",
//         quantity:92 ,
//         gender:"male"  
//     },
    
//     {
//         nameOfProduct:"Sundays Pro Performance 19' Boardshorts" ,
//         price: 59.95,
//         picture:"./pics/men-boardshorts2.jpeg" ,
//         catagory:"Shorts" ,
//         quantity:111 ,
//         gender: "male" 
//     },
//     {
//         nameOfProduct:"Sundays Layback 17' Boardshorts"  ,
//         price: 59.95,
//         picture:"./pics/men-boardshort1.jpeg" ,
//         catagory:"Shorts" ,
//         quantity:87 ,
//         gender:"male"  
//     },
//     {
//         nameOfProduct:"2mm Absolute Wetsuit Hood" ,
//         price: 39.95,
//         picture:"./pics/men-wetsuithood.jpeg" ,
//         catagory:"Hat" ,
//         quantity:67 ,
//         gender:"male"  
//     },
    
//     {
//         nameOfProduct:"Tides Straw Lifeguard Hat" ,
//         price: 22.95,
//         picture:"./pics/men-hat1.jpeg" ,
//         catagory:"Hat" ,
//         quantity:93 ,
//         gender: "male" 
//     },
    
//     {
//         nameOfProduct:"Jetty Bucket Hat" ,
//         price:39.99,
//         picture:"./pics/men-hat2.jpeg" ,
//         catagory:"Hat" ,
//         quantity:71 ,
//         gender:"male"  
//     },
    
//     {
//         nameOfProduct:"Surf Wetsuit Hat" ,
//         price:29.95 ,
//         picture:"./pics/men-surfhat.jpeg" ,
//         catagory:"Hat" ,
//         quantity: 100,
//         gender:"male"  
//     },
    
//     {
//         nameOfProduct:"Onesize Tahiti 2mm Reef Walker Boot" ,
//         price:19.99 ,
//         picture:"./pics/men-reefwalker.jpeg" ,
//         catagory:"Boots" ,
//         quantity:55 ,
//         gender:"male" 
//     },
//     {
//         nameOfProduct: "spring Fever Long Sleeve Spring Suit" ,
//         price: 149.95 ,
//         picture: "./pics/women-springsuit.jpeg",
//         catagory:"Wetsuits" ,
//         quantity: 102 ,
//         gender: "female"  
//     },
//     {
//         nameOfProduct: "Synergy Back Zip Full Wetsuit" ,
//         price: 279.95 ,
//         picture: "./pics/women-fullsuit.jpeg",
//         catagory:"Wetsuits" ,
//         quantity: 88 ,
//         gender: "female"  
//     },
//     {
//         nameOfProduct: "Summer Sky One-Piece Swimsuit" ,
//         price: 99.95 ,
//         picture: "./pics/women-onepiece.jpeg",
//         catagory:"Wetsuits" ,
//         quantity: 77 ,
//         gender: "female"  
//     },
//     {
//         nameOfProduct: "So Essential Tote Bag" ,
//         price: 49.95 ,
//         picture: "./pics/women-tote.jpeg",
//         catagory:"Bags" ,
//         quantity: 97 ,
//         gender: "female"  
//     },
//     {
//         nameOfProduct: "Sol Searcher Multi-Way Triangle Bikini Top" ,
//         price: 45.95 ,
//         picture: "./pics/women-bikini.jpeg",
//         catagory:"Bikinis" ,
//         quantity: 80 ,
//         gender: "female"  
//     },
//     {
//         nameOfProduct: "New Comer Straw Hat" ,
//         price: 25.95 ,
//         picture: "./pics/women-strawhat.jpeg",
//         catagory:"Hats" ,
//         quantity: 50 ,
//         gender: "female"  
//     },
    
    
//     {
//         nameOfProduct:"SumBum Water Bottle" ,
//         price: 14.99,
//         picture:"./pics/SumBum.webp" ,
//         catagory:"More" ,
//         quantity:123 ,
//     },
    
//     {
//         nameOfProduct:"Matkot 15'" ,
//         price:29.99 ,
//         picture:"./pics/matkot.avif" ,
//         catagory:"More" ,
//         quantity:100 ,
//     },
    
//     {
//         nameOfProduct:"Mikasa In Yellow & Blue" ,
//         price:39.99 ,
//         picture:"./pics/mikasa-yellow.webp" ,
//         catagory:"More" ,
//         quantity:182 , 
//     },
    
//     {
//         nameOfProduct:"Mikasa In Classic Black & White" ,
//         price:34.99 ,
//         picture:"./pics/Mikasa.webp" ,
//         catagory:"More" ,
//         quantity:79 ,  
//     },
    
//     {
//         nameOfProduct:"Cool Polar-Box In Pink" ,
//         price:24.99 ,
//         picture:"./pics/Polarbox.webp" ,
//         catagory:"More" ,
//         quantity:99 ,
//     },
    
//     ]