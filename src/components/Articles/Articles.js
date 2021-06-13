import React from "react";
import "./Articles.css";

const Articles = ({ title, src, description, commentName, сomment }) => {
  return (
    <div className="article">
      <div className="articles__title">{title}</div>
      <img className="articles__img" src={src} alt="imageUrl"></img>
      <div className="articles__desc">{description}</div>
      <div className="articles__comment">
        <h2>{commentName}</h2>
        {сomment}
      </div>
    </div>
  );
};

export default Articles;
