const Rating = require('../models/RatingModel')
const productService = require("../services/productService");

async function createRating(req, user) {
  const product = await productService.findProductById(req.productId);

  const rating = new Rating({
    user: user._id,
    product: product._id,
    rating: req.rating,
    created_at: new Date(),
  });

  return await rating.save();
}

async function getProductRating(productId) {
 return await Rating.find({product:productcId})
}

module.exports = {
    createRating,getProductRating
}
