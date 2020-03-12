const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  authors: {
    type: Array,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },

  link: {
    type: String,
    default: ""
  },

  image: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
