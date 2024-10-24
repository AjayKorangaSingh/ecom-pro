const express = require("express")
const router = express.Router()

const authenticate  = require('../middleware/authenticate')
const ReviewController = require('../controller/reviewController')

router.post('/create',authenticate,ReviewController.createReview)
router.get('/product/:productId',authenticate,ReviewController.getAllReview)

module.exports = router

