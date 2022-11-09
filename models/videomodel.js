const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    descripction: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trime: true,
      require: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "models",
      require: true,
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("videomodel", videoSchema);
