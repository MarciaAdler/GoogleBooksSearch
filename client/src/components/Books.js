import React from "react";

export default function Books(props) {
  return (
    <div>
      <ul>
        <li>{props.title}</li>
        <li>{props.authors}</li>
        <li>{props.description}</li>
        <li>
          <img alt={props.title} src={props.image} />
        </li>
        <li>
          <a href={props.link}>Link</a>
        </li>
      </ul>
    </div>
  );
}
