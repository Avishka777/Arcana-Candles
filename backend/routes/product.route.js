import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteproduct, getproducts } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getproducts', getproducts)
router.delete('/deleteproduct/:productId/:userId', verifyToken, deleteproduct)

export default router;