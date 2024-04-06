import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;