const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type:Number,
        require:true
    },
    countInStock:{
        type:Number,
        require:true
    },
    ImageUrl:{
        type:String,
        require:true
    }
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;