const User=require('../models/user');
const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')

console.log("bye")


router.get('/',async(req,res)=>{

    const user=await User.find()

    if(!user){
        res.status(500).json({success:false})
    }
    res.send(user);
}) 

router.get('/id',async(req,res)=>{

    const user=await User.find.findById(req.params.id);

    if(!user){
        res.status(500).json({message:'There is no such user with the given ID'});
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
        streetNum: req.body.streetNum,
        permission:req.body.permission
    })
    user =await user.save();
    if (!user)
    return res.status(404).send('error creating user ')
    
    res.send(user);
})


router.post('/login',async(req,res)=>{
    const user = await User.findOne({name:req.body.name})
    if(!user)
    return res.status(400).send('The user not found')

    return res.status(200).send(user);
})


module.exports=router;