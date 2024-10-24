const jwtProvide = require("../config/jwtProvider");
const User = require("../services/userService");

const authenticate = async(req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).send({ error: "token not found" });
    }

    const userId = await jwtProvide.getUserIdByToken(token);
    const user = await User.findUserById(userId);
    req.user=user
  } catch (err) {
    throw new Error(err);
  }
  next()
};

module.exports = authenticate
