const orderService = require('../services/orderService')

const createOrder = async (req, res) => {
    const user = await req.user;
  try {
    let createdOrder = await orderService.createOrder(user,req.body)
    res.status(200).send(createdOrder)
  } catch (err) {
    throw new Error(err);
  }
};

const findOrderById = async (req, res) => {
    const user = await req.user;
  try {
    let createdOrder = await orderService.findOrderById(req.params.id)
    res.status(200).send(createdOrder)
  } catch (err) {
    throw new Error(err);
  }
};

const orderHistory = async (req, res) => {
    const user = await req.user;
  try {
    let createdOrder = await orderService.userOrderHistory(user._id)
    res.status(200).send(createdOrder)
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
    createOrder,findOrderById,orderHistory
}