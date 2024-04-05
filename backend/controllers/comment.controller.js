import Comment from '../models/comment.model.js';

//Create Comment
export const createComment = async (req, res, next) => {
  try {
    const { content, productId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }

    const newComment = new Comment({
      content,
      productId,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};


//Get Comments
export const getProductComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ productId: req.params.productId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};