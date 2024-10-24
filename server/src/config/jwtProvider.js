const jwt = require("jsonwebtoken");
const SECRET_KEY = "SDJJNCNKNJWJBWJHEWEKJHWEIHWEKDHIEWW";

const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '48h' });
};

const getUserIdByToken = (token) => {
  try {
    const user = jwt.verify(token, SECRET_KEY);
    return user.userId;
  } catch (error) {
    throw new Error('Invalid token'); // You might want to handle this differently in your application
  }
};

module.exports = { generateToken, getUserIdByToken };
