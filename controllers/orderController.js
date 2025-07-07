const Order = require('../models/Order');
const Cart = require('../models/Cart');

const createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const newOrder = new Order({
    userId: req.user._id,
    items: cart.items,
  });

  await newOrder.save();
  cart.items = [];
  await cart.save();
  res.status(201).json(newOrder);
};

const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).populate('items.productId');
  res.json(orders);
};

module.exports = {
  createOrder,
  getUserOrders,
};
