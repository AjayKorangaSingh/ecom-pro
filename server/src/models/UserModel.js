const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fistname: {
    type: String,
    require: true,
  },
  lastnamae: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
    default: "CUSTOMER",
  },
  mobile: {
    type: String,
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  ],
  paymentInfo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payment_info",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createAt: [
    {
      type: Date,
      default: Date.now(),
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
