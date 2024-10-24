const Cart = require("../models/CartModel.js");
const Product = require("../models/ProductModel.js");
const CartItem = require("../models/CartItemSchema.js");
const CartService = require('../services/cartItemService.js')

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    console.log(error);
  }
};

const findUserCart = async (userId) => {
    try {
      const cart = await Cart.findOne({ user: userId }).populate({
        path: 'cartItems', // Ensure you're using the correct property name here
        populate: {
          path: 'product', // Populate product details
        }
      });
  
      if (!cart) {
        throw new Error("Cart not found");
      }
  
      let totalPrice = 0;
      let totalDiscountPrice = 0;
      let totalItem = 0;
  
      // Calculate totals based on populated cart items
      for (let item of cart.cartItems) {
        totalPrice += item.price * item.quantity; // Adjust if needed
        totalDiscountPrice += item.discountPrice * item.quantity; // Adjust if needed
        totalItem += item.quantity;
      }
  
      cart.totalPrice = totalPrice;
      cart.totalItem = totalItem;
      cart.totalDiscountPrice = totalDiscountPrice;
  
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  

  const addCartItem = async (userId, req) => {
    try {
      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        throw new Error("Cart not found");
      }
  
      const product = await Product.findById(req.productId);
      if (!product) {
        throw new Error("Product not found");
      }
  
      const isPresent = await CartItem.findOne({
        cart: cart._id,
        product: product._id,
        userId,
      });
  
      let createdCartItem;
  
      if (!isPresent) {
        const cartItem = new CartItem({
          product: product._id,
          cart: cart._id,
          quantity: 1,
          userId,
          price: product.price,
          size: req.size,
          discountPrice: product.discountPrice,
        });
  
        createdCartItem = await cartItem.save();
        cart.cartItems.push(createdCartItem._id); // Push the ID of the newly created item
        await cart.save();
      } else {
        // Update the quantity if the item already exists
        isPresent.quantity += 1; 
        createdCartItem = await isPresent.save();
      }
  
      return { message: "Item added to cart", cartItem: createdCartItem };
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  

module.exports = { createCart, findUserCart, addCartItem };
