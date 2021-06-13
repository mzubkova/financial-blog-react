import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import Col from "react-bootstrap/Col";

const Card = (props) => {
  const { id, imageUrl, title } = props.data;
  return (
    <NavLink to={`/article/${id}`}>
      <Col className="card">
        <img className="card__img" src={imageUrl} alt="image"></img>
        <div className="card__title">{title}</div>
      </Col>
    </NavLink>
  );
};

export default Card;
