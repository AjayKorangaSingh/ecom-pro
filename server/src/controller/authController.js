const UserService = require("../services/userService");
const jwt = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const cartService = require('../services/cartService')

const register = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    const token = await jwt.generateToken(user._id);

      await cartService.createCart(user)
    res.send({ token, message: "success" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await UserService.findUserByEmail(email);
    if (!user) {
      return res.status(404).send({ message: "user not found by email" });
    }
    const ispasswordValid = await bcrypt.compare(password, user.password);

    if (!ispasswordValid) throw new Error("password Incorrect");

    const token = await jwt.generateToken(user._id);
    res.status(200).send({ token, message: "success" });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {register,login}