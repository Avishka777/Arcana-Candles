import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteproduct, getproducts, updateproduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getproducts', getproducts)
router.delete('/deleteproduct/:productId/:userId', verifyToken, deleteproduct)
router.put('/updateproduct/:productId/:userId', verifyToken, updateproduct)

export default router;