const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const order = require("../models/order");
const product = require("../models/product");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get("/", async (req, res) => {
    try {
        const username = req.cookies.username;

        // Query the database to find orders for the specific username
        const orders = await order.find({ name: username });
        
        res.render("orders", { orders });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;