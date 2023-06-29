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


//with "await" when we want to find an object we first calling it , and its going to "wait" until its finding the object, and only then going to print it, we need to add the "async" in the beginning of the function.

app.get('/products',async (req,res)=>{
   const productList= await Product.find();
   if(!productList){
    res.status(500).json({success: false})
   }

   res.send(productList);
   // const product={
    //     nameOfProduct:"blabla",
    //     price:"12$",
    //     picture: "12312515.com",
    //     catagory:"somthing",
    //     quantity:12,
    //     gender:"male"
    // }

    //res.send(product);
    
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






// const product=new Product({
//     nameOfProduct: req.body.name,
//     price: req.body.price,
//     category: req.body.category,
//     quantity: req.body.quantity,
// })
// product.save().then((createdProduct=>{
//     res.status(201).json(createdProduct)
// })).catch((err)=>{
//     res.status(500).json({
//         error:err,
//         success:false
//     })
// })