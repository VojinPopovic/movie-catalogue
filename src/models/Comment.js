const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const commentSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userimage: {
      type: String,
      required: true,
    },
    commentmaker: {
      type: String,
      required: true,
    },
    commentmakeremail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = models.Comment || model("Comment", commentSchema);
export default Comment;
