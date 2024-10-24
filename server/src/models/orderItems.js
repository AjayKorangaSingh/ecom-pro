const mongoose = require("mongoose");

const OrderItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
    require:true
  },
  price: {
    type: Number,
    require:true
  },
  discountPrice: {
    type: Number,
    require:true
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require:true
  }
});

const orderItemsModel = mongoose.model("orderItems", OrderItemsSchema);

module.exports = orderItemsModel;
