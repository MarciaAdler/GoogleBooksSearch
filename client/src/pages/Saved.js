import React, { useState, useEffect } from "react";
import SavedBook from "../components/SavedBook";
import api from "../utils/api";

export default function Saved() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    loadBooks();
  });
  async function loadBooks() {
    const { data } = await api.getBooks();

    setBooks(data);
  }

  return (
    <div>
      {books
        ? books.map(book => (
            <SavedBook
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
            ></SavedBook>
          ))
        : "no books found"}
    </div>
  );
}
