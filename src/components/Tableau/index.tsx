import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TableauPile from "../TableauPile";
import "./tableau.scss";
import { useSelector } from "react-redux";
import { selectTableau } from "../../slices/tableauSlice";

export default function Tableau() {
  const tableau = useSelector(selectTableau);

  useEffect(() => {
    console.log("tableau", tableau);
  }, [tableau]);

  return (
    <div id="tableau">
      {[0, 1, 2, 3, 4, 5, 6].map((pileNum) => (
        <TableauPile
          key={uuidv4()}
          cards={tableau[pileNum]}
          pileIndex={pileNum}
        />
      ))}
    </div>
  );
}
