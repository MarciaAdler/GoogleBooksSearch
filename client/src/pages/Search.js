import React, { useState } from "react";
import Books from "../components/Books";
import api from "../utils/api";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function loadBooks(book) {
    api
      .searchBooks(book)
      .then((request, res) => {
        const search = request.data.items.filter(
          book =>
            book.volumeInfo.title &&
            book.volumeInfo.authors &&
            book.volumeInfo.description &&
            book.volumeInfo.imageLinks.smallThumbnail &&
            book.volumeInfo.infoLink
        );
        console.log(search);
        setBooks(search);
      })

      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    loadBooks(formObject.title);
  }
  return (
    <div>
      <form>
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <button onClick={handleFormSubmit}>Submit Book</button>
      </form>

      {books.map(book => (
        <Books
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          link={book.volumeInfo.infoLink}
        />
      ))}
    </div>
  );
}
