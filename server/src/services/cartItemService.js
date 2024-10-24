const userService = require('./userService') 
const CartItem = require("../models/CartItemSchema");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error(`Cart Item not found${cartItemId}`);
    }

    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error(`user not found${item.userId}`);
    }
    console.log(item.product,"product")
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountPrice = item.quantity * item.product.discountPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    }
  } catch (err) {
    throw new Error('you cant update')
  }
};

const removeCartItem = async (userId, cartItemId) => {
  const user = await userService.findUserById(userId);
  const cartItem = await findCartItemById(cartItemId);
  
  if (user._id.toString() === cartItem.userId.toString()) {
    await CartItem.findByIdAndDelete(cartItemId);
  } else {
    throw new Error(`you cant remove this cart`);
  }
};

async function findCartItemById (userId){
  const cartItem = await CartItem.findById(userId).populate({
    path: 'product',
  })
  if (cartItem) return cartItem;
  else throw new Error("cartitem not found");
};

module.exports = {updateCartItem,removeCartItem,findCartItemById}
