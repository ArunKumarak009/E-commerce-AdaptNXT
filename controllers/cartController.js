const Cart = require('../models/Cart');

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
  res.json(cart || { items: [] });
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user._id });

  if (!cart) {
    cart = new Cart({ userId: req.user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.status(201).json(cart);
};

const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user._id });

  const item = cart.items.find((item) => item.productId.toString() === productId);
  if (item) item.quantity = quantity;

  await cart.save();
  res.json(cart);
};

const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ userId: req.user._id });
  cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
  await cart.save();
  res.json(cart);
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
};
