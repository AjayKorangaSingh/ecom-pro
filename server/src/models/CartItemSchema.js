const mongoose = require("mongoose");

const CartItemModel = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
    require: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  price:{
   type:Number,
   require:true
  },
  discountPrice:{
    type:Number,
    require:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    require:true
  }
});

const cartItem = mongoose.model("cartItems", CartItemModel);

module.exports = cartItem;
