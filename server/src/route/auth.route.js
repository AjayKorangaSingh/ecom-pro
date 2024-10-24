const express = require("express")
const router = express.Router()
const authController = require('../controller/authController')

router.post('/register',authController.register)
router.post('/signin',authController.login)

module.exports = router   