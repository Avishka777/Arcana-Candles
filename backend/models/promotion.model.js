import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema(
  {
    promoimage1: {
      type: String,
    },
    promoimage2: {
        type: String,
      },
  },
  { timestamps: true }
);

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;