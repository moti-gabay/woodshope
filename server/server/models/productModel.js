const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
    name:String,
    image:String,
    thickness: {
        type: Array,
    },
    pricePerCm:Number,
    inStock:{
        type:Boolean, default:true
    }  
},{timestamps:true});

exports.ProductModel = mongoose.model("products",productSchema);

exports.validProduct = (reqBody) => {
    const joiSchema = Joi.object({
        name:Joi.string().min(2).max(20).required(),
        image:Joi.string().min(2).max(10000).required(),
        thickness:Joi.array().items(Joi.number().min(0.5).max(20)).min(1).max(5).required(),        pricePerCm:Joi.number().min(0.1).max(10).required()
    })
    return joiSchema.validate(reqBody);
}