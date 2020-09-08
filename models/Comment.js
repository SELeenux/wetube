import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    defualt: Date.now
  }
  // video: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Video"
  // }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;