import React from "react";
import Card from "../Card";

import "./foundations.scss";
import { useAppSelector } from "../../hooks/store";
import { selectFoundations } from "../../slices/foundationSlice";

export default function Foundations() {
  const foundations = useAppSelector(selectFoundations);

  return (
    <div id="foundations">
      {foundations.map((foundation, i) => (
        <div key={i}>
          <Card
            card={
              foundation.length > 0
                ? foundation[foundation.length - 1]
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
}
