const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  orderItems: [    //  Order Items needs to fix this
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItems",
    },
  ],
  orderDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  deliverDate: {
    type: Date,
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
  },
  paymentDetails: {
    paymentMethod: {
      type: String,
    },
    transitionId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "PENDING",
    },
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  totalDiscountPrice: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  orderStatus: {
    type: String,
    require: true,
    default: "PENDING",
  },
  totalItem: {
    type: Number,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const orderModel = mongoose.model("order", OrderSchema);

module.exports = orderModel;
