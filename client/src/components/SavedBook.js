import React from "react";

export default function Books(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3">
          <img className="ml-3 mt-3" alt={props.title} src={props.image} />
          <br />
          <button
            className="ml-3"
            onClick={() => {
              props.deleteBook(props.id);
            }}
          >
            Delete Book
          </button>
        </div>
        <div className="col-12 col-md-9 col-lg-9">
          <ul className="mt-3">
            <li>
              <strong>{props.title}</strong>
            </li>
            <li>{props.authors}</li>
            <li>{props.description}</li>
            <li>
              <a href={props.link}>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
