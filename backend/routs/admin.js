const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path');
const Product=require('../models/product');



// cards to be displayed on the admin page 
router.get('/', async (req, res) => {                       
    console.log("admin");
    const nProducts = await Product.countDocuments();
    const nOrders = 23;             //await Order.countDocuments(); 
    const nSales = 12;              //await Order.countDocuments({ status: 'delivered' }); 
    res.render('admin', {
        nproducts: nProducts,
        norders: nOrders,
        nsales: nSales
    });

});




/*app.get('/admin', (req, res) => {
    Product.countDocuments()
      .then(productCount => {
        res.render('admin', { productCount });                          // This passes the product count to admin.ejs
      })
      .catch(err => res.status(400).send('Error: ' + err));
  });



// Get a reference to the sidebar element
var sidebar = document.getElementById("sidebar");

// Function to open the sidebar
function openSidebar() {
    if (!sidebar.classList.contains("sidebar_responsive")) {
        sidebar.classList.add("sidebar_responsive");
    }
}

// Function to close the sidebar
function closeSidebar() {
    if (sidebar.classList.contains("sidebar_responsive")) {
        sidebar.classList.remove("sidebar_responsive");
    }
}

//charts
// Bar chart for top 5 products
var optionsBar = {
    chart: {
        type: 'bar'
    },
    series: [{
        data: [30, 40, 45, 50, 49]
    }],
    xaxis: {
        categories: ['footvolly-ball', 'Product 2', 'Product 3', 'Product 4', 'Product 5']
    }
}

var barChart = new ApexCharts(document.querySelector("#bar-chart"), optionsBar);
barChart.render();

// Area chart for Purchase and Sales Orders
var optionsArea = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }, {
        name: 'Purchase',
        data: [23, 31, 35, 51, 49, 62, 68, 91, 148]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
}

var areaChart = new ApexCharts(document.querySelector("#area-chart"), optionsArea);
areaChart.render();
*/
module.exports=router;
