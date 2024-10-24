const mongoose = require("mongoose")

const CartegorySchema = new mongoose.Schema({
 name:{
    type:String,
    require:true,
    maxlength:50
 },
 parentcategory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
 },
 level:{
   type:Number,
   require:true 
 }
})

const categoryModel = mongoose.model('category',CartegorySchema)

module.exports = categoryModel