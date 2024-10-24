const CartItemService = require("../services/cartItemService")

const updateCartItem = async (req, res) => {
  const user = req.user; // Get the authenticated user from the request
  try {
    const updatedCartItem = await CartItemService.updateCartItem(user._id, req.params.id, req.body);
    return res.status(200).send(updatedCartItem);
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ error: err.message }); // Send a user-friendly error message
  }
};


const removeCartItem = async (req, res) => {
    const user =await req.user;
  try {
    await CartItemService.removeCartItem(user._id,req.params.id)
    return res.status(200).send("cart item remove")
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {updateCartItem,removeCartItem}