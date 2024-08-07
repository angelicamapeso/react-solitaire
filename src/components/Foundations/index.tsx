import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

import "./foundations.scss";
import { useAppSelector } from "../../hooks/store";
import { selectFoundations } from "../../slices/foundationSlice";
import { EMPTY_CARD } from "../../constants/card";

export default function Foundations() {
  const foundations = useAppSelector(selectFoundations);

  return (
    <div id="foundations">
      {foundations.map((foundation, i) => (
        <div key={uuidv4()}>
          <Card
            card={
              foundation.length > 0
                ? foundation[foundation.length - 1]
                : {
                    ...EMPTY_CARD,
                    location: {
                      name: "foundation",
                      pileIndex: i,
                      index: 0,
                    },
                  }
            }
          />
        </div>
      ))}
    </div>
  );
}
