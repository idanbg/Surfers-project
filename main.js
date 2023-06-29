const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongo=require('mongoose');//need to call the DB
const url="mongodb+srv://Golshim123:Golshim123@webdevproject.k2obzer.mongodb.net/surfDB"//calling the wanted DB

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



const myschema = new mongo.Schema({
    nameOfProduct: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
     required: true,
    },
    category: {
      type: String,
       required: true,
    },
    quantity: {
      type: Number,
       required: true,
    },
    gender:{
        type: String
    },
  }, { versionKey: false });
// Create the Product model using the schema

const Product = mongo.model('Product', myschema);



app.get('/products',(req,res)=>{
    const product={
        nameOfProduct:"blabla",
        price:"12$",
        picture: "12312515.com",
        catagory:"somthing",
        quantity:12,
        gender:"male"
    }
    res.send(product);
})
app.post('/products',(req,res)=>{
    const product=new Product({
        nameOfProduct: req.body.name,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
    })
    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })
})

mongo.connect(url)
.then(()=>{
    console.log('DB Connection Success!')
})
.catch((err)=>{
    console.log(err);
})








app.listen(3400,()=>{
    console.log("server is running http://localhost3400");
})



