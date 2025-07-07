const express = require('express');
const router = express.Router();
const { protect , adminOnly } = require('../middlewares/authMiddleware');

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.post('/', protect, adminOnly, createProduct);
router.put('/:id', protect, adminOnly, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

module.exports = router;