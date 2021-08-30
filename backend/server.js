require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products',productRoutes);

app.listen(PORT,()=>{
    console.log(`server runuung on ${PORT}`);
})