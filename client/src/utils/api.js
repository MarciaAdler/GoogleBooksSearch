const axios = require("axios");

export default {
  // Get all posts
  searchBooks: function(req, response) {
    console.log(req);
    const book = req;
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  getBooks: function(req, response) {
    return axios.get("api/books", response);
  },

  saveBook: function(book) {
    return axios.post("/api/books", book);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
