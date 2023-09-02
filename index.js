const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001
 const cors = require('cors');
const product = require('./routes/productCategories');
require('dotenv').config() ;
require('./services/postgres.service');

 app.use(cors());
 app.use(express.json());
//  require('dotenv').config();

// app.get('/',(req,res) => {
//     res.send('Welecome to eStore backend');
// })

app.use('/',product);




app.listen(PORT,() => {
    console.log(`Server is running at port ${PORT}`)
})