import React from "react";
import TableauPile from "../TableauPile";
import "./tableau.scss";
import { useSelector } from "react-redux";
import { selectTableau } from "../../slices/tableauSlice";

export default function Tableau() {
  const tableau = useSelector(selectTableau);

  // useEffect(() => {
  //   console.log("tableau", tableau);
  // }, [tableau]);

  return (
    <div id="tableau">
      {tableau.map((pile, i) => (
        <TableauPile key={i} cards={pile} />
      ))}
    </div>
  );
}
