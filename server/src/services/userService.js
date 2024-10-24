const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    const { firstname, lastname, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist");
    }
    const hashPass = await bcrypt.hash(password, 8);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPass,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate('address')
    if (!user) throw new Error("User not found by Id");
    return user;
  } catch (err) {
    console.log(err)
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found by email");
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = await jwtProvider.getUserIdByToken(token);
    const user = await findUserById(userId);
    if (!user) throw new Error("User not found by email");
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  getUserProfileByToken,
  getAllUser,
};
