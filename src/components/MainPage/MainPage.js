import React from "react";
import Card from "../Card";
import "./MainPage.css";

const MainPage = (props) => {
  const createCard = () => {
    return props.data.map((el) => <Card data={el} key={el.description} />);
  };
  return <div className="main-wrapper">{createCard()}</div>;
};

export default MainPage;
