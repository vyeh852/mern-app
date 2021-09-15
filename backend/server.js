require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/auth');
const privateRoutes = require('./routes/private')
const errorHandler = require('./middleware/error')

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin:"*",
   })
);
app.use(express.json());

app.use('/api/products',productRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/private',privateRoutes);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server runuung on ${PORT}`);
})