const axios = require("axios");

export default {
  // Get all posts
  searchBooks: function(req, response) {
    console.log(req);
    const book = req;
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  getBooks: function() {
    return axios.get("api/books");
  },

  createBook: function(createBook) {
    return axios.post("/api/books", createBook);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books" + id);
  }
};
