import React from "react";

export default function Books(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-3 col-lg-3">
        <img alt={props.title} src={props.image} />
        <button>Save</button>
      </div>
      <div className="col-12 col-md-9 col-lg-9">
        <ul>
          <li>{props.title}</li>
          <li>{props.authors}</li>
          <li>{props.description}</li>
          <li>
            <a href={props.link}>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
