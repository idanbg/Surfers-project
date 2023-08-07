const Product = require('../models/product');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
        //router.get('/',function(req,res))
        
      router.get('/',async(req,res)=>{
        try{
        const products=await Product.find({"gender":'female'});
        const filePath=path.join(__dirname,'../../views/women.html')
        res.sendfile(filePath,{products});
        }
        catch(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        
      });





      //   `
      //   <div class="thumbnail text-center">
      //     <img class="img-fluid" src="${data.picture}" alt="">
      //     <div class="caption">
      //       <p class="card-text font-monospace">${data.name}</p>
      //       <p class="card-text font-monospace"><strong>${data.price}$</strong></p>
      //     </div>
      //     <div class="btn-group">
      //       <button type="button" class="btn btn-sm btn-dark rounded-start-pill">Add To Cart</button>
      //       <button type="button" class="btn btn-sm btn-white btn-outline-dark rounded-end-circle">
      //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
      //           <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
      //         </svg>
      //       </button>
      //     </div>
      //   </div>
      // `;
    
      module.exports=router;