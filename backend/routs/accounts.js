const Account=require('../models/account');
const express=require('express')
const router=express.Router();

console.log("bye")
router.get('/',async(req,res)=>{

    const somthing=await Account.find();

    if(!somthing){
        res.status(500).json({success:false})
    }
    res.send(somthing);
})




module.exports=router;