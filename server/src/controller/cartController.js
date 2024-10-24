const CartService = require('../services/cartService')

const findUserCart = async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).send({ message: "User not authenticated" });
  }

  try {
    const cart = await CartService.findUserCart(user._id);
    return res.status(200).send(cart);
  } catch (err) {
    if (err.message === "Cart not found") {
      return res.status(404).send({ message: "Cart not found" });
    }
    return res
      .status(500)
      .send({ message: "Error retrieving cart", error: err.message });
  }
};

const addItemCart = async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).send({ message: "User not authenticated" });
  }

  try {
    const cartItem = await CartService.addCartItem(user._id, req.body);
    return res.status(200).send(cartItem);
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error adding item to cart", error: err.message });
  }
};

module.exports = { findUserCart, addItemCart };
