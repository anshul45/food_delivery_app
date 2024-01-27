import mongoose from "mongoose";

const reviewModel = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models?.Review || mongoose.model("Review", reviewModel);
