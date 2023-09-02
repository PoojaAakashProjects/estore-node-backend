const pool = require('../services/postgres.service');
const express = require('express');
const product = express.Router();



product.get('/get-product-categories',async(req,res) => {
    const data = await pool.query(`SELECT * FROM "public"."categories"`);
    console.log(data.rows);
    res.send(data.rows)
})

product.get('/get-product-name',async(req,res) => {
    const data = await pool.query(`SELECT * FROM "public"."products"`);
    console.log(data.rows);
    res.send(data.rows)
})

product.post('/post-cart-data',async(req,res) => {
    const cartData  = req.body;
    console.log(cartData);
   
    const query = `
    INSERT INTO cart (
        product_name ,
        category_id ,
        product_image ,
        price ,
        email
      )
      VALUES
      (
        '${cartData.product_name}',
        '${cartData.category_id}',
        '${cartData.product_image}',
        '${cartData.price}',
        '${cartData.email}'
      )
    `
    const result = await pool.query(query);
    console.log(result);

})

//get-cart-data
product.get('/get-cart-data',async(req,res) => {
    const data = await pool.query(`SELECT * FROM "public"."cart" where "email" = '${req.body}'`);
    console.log(data.rows);
    res.send(data.rows);
})

module.exports = product;