const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
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
  rating: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const RatingModel = mongoose.model("rating", RatingSchema);

module.exports = RatingModel;
