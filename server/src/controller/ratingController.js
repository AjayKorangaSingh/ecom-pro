const RatingService = require("../services/ratingService");

const createRating = async (req, res) => {
  const user = req.user;
  try {
    const review = await RatingService.createRating(req.body, user);
    return res.status(201).send(review);
  } catch (err) {
    throw new Error(err);
  }
};

const getAllRatings = async (req, res) => {
    const productId = req.params.productId
  const user = req.user;
  try {
    const review = await RatingService.getAllRatings(productId)
    return res.status(201).send(review);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
    createRating,getAllRatings
}
