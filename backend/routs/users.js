const User=require('../models/user');
const express=require('express')
const router=express.Router();

console.log("bye")
router.get('/',async(req,res)=>{

    const user=await User.find();

    if(!user){
        res.status(500).json({success:false})
    }
    res.send(user);
}) 
router.post('/',async(req,res)=>{
     let user = new User({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        city:req.body.city,
        street:req.body.street,
        streetNum: req.body.streetNum
    })
    user =await user.save();
    if (!user)
    return res.status(404).send('error creating user ')
    
    res.send(user);
})



module.exports=router;