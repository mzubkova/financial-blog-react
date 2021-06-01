import React from "react";
import CardTemp from "../Card";
import "./MainPage.css";
import data from "../../data/data.json";

const MainPage = () => {
  return (
    <div className="main-wrapper">
      {data.map((card) => (
        <CardTemp
          src={card.img}
          title={card.description}
          {...card}
          key={card.id}
        />
      ))}
      ;
    </div>
  );
};

export default MainPage;
