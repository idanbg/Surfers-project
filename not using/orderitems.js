const OrderItem=require('../models/orderitem');
const express=require('express')
const router=express.Router();


router.get('/',async(req,res)=>{

    const somthing=await OrderItem.find();

    if(!somthing){
        res.status(500).json({success:false})
    }
    res.send(somthing);
})
//  router.post('/',async(req,res)=>{
//     let order= new Order({
//         quantity: 
//         product: 
            
//  })





module.exports=router;