const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  seller: {
    type: ObjectId,
    ref: "User",
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Item", UserSchema);
