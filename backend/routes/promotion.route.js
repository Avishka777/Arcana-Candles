import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepromotion, getAllPromotions } from '../controllers/promotion.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getpromotion', getAllPromotions);
router.delete('/deletepromotion/:promotionId/:userId', verifyToken, deletepromotion)

export default router;