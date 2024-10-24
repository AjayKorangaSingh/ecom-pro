const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },
  review: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const ReviewModel = mongoose.model("review", ReviewSchema);

module.exports = ReviewModel;
