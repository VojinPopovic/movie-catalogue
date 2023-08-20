const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const watchlistsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    vote_average: {
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

const Watchlists = models.Watchlists || model("Watchlists", watchlistsSchema);
export default Watchlists;
