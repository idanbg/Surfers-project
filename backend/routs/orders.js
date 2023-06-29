const Order=require('../models/order');
const express=require('express')
const router=express.Router();


router.get('/',async(req,res)=>{

    const somthing=await Order.find();

    if(!somthing){
        res.status(500).json({success:false})
    }
    res.send(somthing);
})




module.exports=router;