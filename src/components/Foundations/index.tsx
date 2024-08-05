import React from "react";
import Card from "../Card";

import "./foundations.scss";

export default function Foundations() {
  const generatePiles = () => {
    const piles = [];
    for (let i = 0; i < 4; i++) {
      piles.push(<Card key={i} />);
    }
    return piles;
  };

  return <div id="foundations">{generatePiles()}</div>;
}
