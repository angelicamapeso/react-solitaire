import React from "react";
import Pile from "./Pile";
import "../styles/tableau.scss";
import { useSelector } from "react-redux";
import { selectTableau } from "../slices/tableauSlice";

export default function Tableau() {
  const tableau = useSelector(selectTableau);

  return (
    <div id="tableau">
      {tableau.map((pile, i) => (
        <Pile key={i} cards={pile} />
      ))}
    </div>
  );
}
