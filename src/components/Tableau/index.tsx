import React from "react";
import { v4 as uuidv4 } from "uuid";
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
        <TableauPile key={uuidv4()} cards={pile} />
      ))}
    </div>
  );
}
