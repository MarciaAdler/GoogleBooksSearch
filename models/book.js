const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  authors: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },

  link: {
    type: String,
    default: "",
    unique: true
  },
  image: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
