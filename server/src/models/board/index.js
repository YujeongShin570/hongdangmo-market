const { Schema, model } = require("mongoose");
const BoardSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageLink: {
    type: String,
  },
});

module.exports = model("board", BoardSchema);
