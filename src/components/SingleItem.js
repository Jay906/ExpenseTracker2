import React from "react";
import { Link } from "react-router-dom";

function SingleItem({ image, title, link }) {
  return (
    <Link to={link} className="center">
      <div className="image">{image}</div>
      <p>{title}</p>
    </Link>
  );
}

export default SingleItem;
