const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require('../controllers/cartController');

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.put('/', protect, updateCartItem);
router.delete('/:productId', protect, removeFromCart);

module.exports = router;