const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const reviewsSchema = new Schema(
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

const Reviews = models.Reviews || model("Reviews", reviewsSchema);
export default Reviews;
