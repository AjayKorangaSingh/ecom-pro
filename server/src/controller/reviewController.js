const ReviewService = require("../services/reviewService");

const createReview = async (req, res) => {
  const user = req.user;
  try {
    const review = await ReviewService.createReview(req.body, user);
    return res.status(201).send(review);
  } catch (err) {
    throw new Error(err);
  }
};

const getAllReview = async (req, res) => {
    const productId = req.params.productId
  const user = req.user;
  try {
    const review = await ReviewService.createReview(productId);
    return res.status(201).send(review);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
    createReview,getAllReview
}
