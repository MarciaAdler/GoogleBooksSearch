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
            book.volumeInfo.imageLinks.thumbnail &&
            book.volumeInfo.infoLink
        );
        console.log(search);
        setBooks(search);
      })

      .catch(err => console.log(err));
  }

  function saveBook(props) {
    console.log(props);
    api
      .saveBook({
        authors: props.authors,
        description: props.description,
        link: props.link,
        image: props.image,
        title: props.title
      })
      .then(res => console.log(res.data))
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
      <form className="d-flex justify-content-center mt-3">
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
          image={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.infoLink}
          saveBook={saveBook}
        ></Books>
      ))}
    </div>
  );
}
