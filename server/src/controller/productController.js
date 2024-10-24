const ProductService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (err) {
    throw new Error(err);
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (err) {
    throw new Error(err);
  }
};

const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await ProductService.findProductById(productId);
      return res.status(201).send(product);
    } catch (err) {
      throw new Error(err);
    }
  };

  const getAllProducts = async (req, res) => {
    const productId = req.params.id;
    try {
      const products = await ProductService.getAllProduct(req.query);
      return res.status(201).send(products);
    } catch (err) {
      throw new Error(err);
    }
  };

  const createMultipleProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await ProductService.createMultipleProduct(req.body);
      return res.status(201).send({msg:'products created successfully'});
    } catch (err) {
      throw new Error(err);
    }
  };

module.exports = { createProduct, deleteProduct, updateProduct,findProductById,getAllProducts,createMultipleProduct };
