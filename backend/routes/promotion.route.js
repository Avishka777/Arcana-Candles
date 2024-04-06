import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getAllPromotions } from '../controllers/promotion.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getpromotion', getAllPromotions);

export default router;