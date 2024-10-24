const CartService = require("../services/cartService");
const Address = require("../models/AddressModel");
const Order = require("../models/OrderModel");
const OrderItem = require("../models/CartItemSchema") 

const createOrder = async (user, shippingAddress) => {
  let address;
  if (shippingAddress._id) {
    address = await Address.findById(shippingAddress._id);
  } else {
    address = new Address(shippingAddress);
    address.user = user;
    await address.save();
    
    user.address.push(address);
    await user.save();
  }

  const cart = await CartService.findUserCart(user._id);
  const orderItems = []; // Renamed to orderItems for clarity

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({ // Use the OrderItem model here
      price: item.price,
      product: item.product,
      quantity: item.quantity, 
      size: item.size,
      userId: item.userId,
      discountPrice: item.discountPrice,
    });

    const createdOrderItem = await orderItem.save(); // Await save operation
    orderItems.push(createdOrderItem); // Push created order item to the array
  }

  const createdOrder = new Order({
    user,
    orderItems, // Use the correctly populated orderItems array
    totalPrice: cart.totalPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });

  const saveOrder = await createdOrder.save();
  return saveOrder;
};

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

async function confirmOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";
  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";
  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItem", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderHistory(userId) {
  try {
    const order = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItem", populate: { path: "product" } })
      .lean();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getAllOrders() {
  try {
    const order = await Order.find({ user: userId })
      .populate({ path: "orderItem", populate: { path: "product" } })
      .lean();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  createOrder,
  placeOrder,
  confirmOrder,
  shipOrder,
  cancelOrder,
  deliverOrder,
  userOrderHistory,
  getAllOrders,
  deleteOrder,
};
