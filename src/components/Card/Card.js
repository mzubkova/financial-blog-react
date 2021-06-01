import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import Col from "react-bootstrap/Col";

const Card = ({ id, img, title, link }) => {
  return (
    <NavLink to={`/articles/${id}`}>
      <Col className="card">
          <img src={img} alt=""></img>
          <div className="card__title">{title}</div>
          <a className="card__link">{link}</a>
      </Col>
    </NavLink>
  );
};

export default Card;
