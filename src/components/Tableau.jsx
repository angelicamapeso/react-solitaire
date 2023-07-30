import React from "react";
import Pile from "./Pile.jsx";
import "../styles/tableau.scss";

export default function Tableau() {
  const generatePiles = () => {
    const numPiles = 7;
    const piles = [];
    for (let i = 0; i < numPiles; i++) {
      piles.push(<Pile key={i} />);
    }
    return piles;
  };

  return <div id="tableau">{generatePiles()}</div>;
}
