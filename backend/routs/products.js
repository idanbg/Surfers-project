const Product=require('../models/product');
const express=require('express')
const router=express.Router();


router.get('/',async(req,res)=>{
    console.log("heyyyyy");
    const product=await Product.find();

    if(!product){
        res.status(500).json({success:false})
    }
   res.send(product);
    //JSON.parse(product);
})

router.post('/',(req,res)=>{
        const product=new Product({
             name: req.body.name,
             price: req.body.price,
             picture:req.body.picture,
             category: req.body.category,
             quantity: req.body.quantity,
             gender:req.body.gender

         })
         product.save().then((createdProduct=>{
             res.status(201).json(createdProduct)
         })).catch((err)=>{
             res.status(500).json({
                 error:err,
               success:false
             })
        })
        //res.send(product);
       // JSON.parse(product);
})



module.exports=router;












