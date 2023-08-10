const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const reviewSchema = new Schema(
  {
    moviename: {
      type: String,
      required: true,
    },
    movieid: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = models.Review || model("Review", reviewSchema);
export default Review;
