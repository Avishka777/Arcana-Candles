import Promotion from '../models/promotion.model.js';
import { errorHandler } from '../utils/error.js';


//Add Promotion
export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You Are Not Allowed To Create A Promotion'));
  }
  const newPromotion = new Promotion({
    ...req.body,
    userId: req.user.id,
  });
  try {
    const savedPromotion = await newPromotion.save();
    res.status(201).json(savedPromotion);
  } catch (error) {
    next(error);
  }
};


// Get all promotions
export const getAllPromotions = async (req, res, next) => {
  try {
    const promotions = await Promotion.find();
    res.status(200).json(promotions);
  } catch (error) {
    next(error);
  }
};


//Delete Promotion
export const deletepromotion = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You Are Not Allowed To Delete This Promotion'));
  }
  try {
    await Promotion.findByIdAndDelete(req.params.promotionId);
    res.status(200).json('The Promotion Has Been Deleted');
  } catch (error) {
    next(error);
  }
};
