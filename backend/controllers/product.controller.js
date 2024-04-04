import Product from '../models/product.model.js';
import { errorHandler } from '../utils/error.js';


//Add Product
export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You Are Not Allowed To Create A Product'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please Provide All Required Fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newProduct = new Product({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};