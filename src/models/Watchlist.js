const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const watchlistSchema = new Schema(
  {
    movieid: {
      type: String,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Watchlist = models.Watchlist || model("Watchlist", watchlistSchema);
export default Watchlist;
