import React from "react";
import Card from "./Card";

import "../styles/waste.scss";

export default function Waste() {
  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(<Card key={i} card={true} />);
    }
    return cards;
  };

  return <div id="waste">{generateCards()}</div>;
}
