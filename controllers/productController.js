const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try{
  const { page = 1, limit = 10, search = '', category = '' } = req.query;
  const query = {
    name: { $regex: search, $options: 'i' },
    ...(category && { category })
  };
  const products = await Product.find(query)
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.json(products);}
  catch(error){
    res.status(500).json({message:"server error" , error:error.message}) 
  }
};

const createProduct = async (req, res) => {
    try{
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({message:"Successfully created " ,product});
    }catch(error){
 res.status(500).json({message:"server error" , error:error.message}) 

    }
};

const updateProduct = async (req, res) => {
    try{
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
    }catch(error){
        res.status(500).json({message:"server error" , error:error.message}) 
    }
};

const deleteProduct = async (req, res) => {
    try{
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
    }
    catch{
        res.status(500).json({message:"server error" , error:error.message}) 
    }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};