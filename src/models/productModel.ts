import mongoose from "mongoose";

const productModel  = new mongoose.Schema({
title : {
    type: String,
    required: true
},
price : {
    type: Number,
    required: true
},
images : [],
category : {
    type: String,
    required: true
},
desc:{
    type: Number,
    required: true
}
})

export default mongoose.models?.Product || mongoose.model('Product', productModel);