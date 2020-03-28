import React, { useState } from "react";
import Books from "../components/Books";
import api from "../utils/api";
const styles = {
  button: {
    backgroundColor: "lightblue"
  }
};
export default function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function loadBooks(book) {
    api
      .searchBooks(book)
      .then((request, res) => {
        const books = request.data.items;
        console.log(books);
        const search = books.map(book => {
          let bookObject = book.volumeInfo;
          if (!bookObject.imageLinks) {
            bookObject.imageLinks = {
              thumbnail:
                "https://via.placeholder.com/128x208?text=No+Image+Available"
            };
          }

          return book;
        });
        // const search = books.filter(
        //   book =>
        //     book.volumeInfo.title &&
        //     book.volumeInfo.authors &&
        //     book.volumeInfo.description &&
        //     book.volumeInfo.imageLinks.thumbnail &&
        //     book.volumeInfo.infoLink
        // );
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
        <button style={styles.button} onClick={handleFormSubmit}>
          Submit Book
        </button>
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
