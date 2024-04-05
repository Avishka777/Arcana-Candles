import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, getProductComments } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getProductComments/:productId', getProductComments);

export default router;