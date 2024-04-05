import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getproducts } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getproducts', getproducts)

export default router;