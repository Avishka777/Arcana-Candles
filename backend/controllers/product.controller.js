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


//Get Product Details
export const getproducts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const products = await Product.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { category: req.query.slug }),
      ...(req.query.productId && { _id: req.query.productId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalProducts = await Product.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthProducts = await Product.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      products,
      totalProducts,
      lastMonthProducts,
    });
  } catch (error) {
    next(error);
  }
};


//Delete Product
export const deleteproduct = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You Are Not Allowed To Delete This Product'));
  }
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json('The Product Has Been Deleted');
  } catch (error) {
    next(error);
  }
};


//Update Product
export const updateproduct = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You Are Not Allowed To Update This Product'));
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};