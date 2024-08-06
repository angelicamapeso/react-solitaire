import React, { useEffect } from "react";
import Card from "../Card";

import "./waste.scss";
import { useAppSelector } from "../../hooks/store";
import { selectWaste } from "../../slices/stockWasteSlice";

export default function Waste() {
  const waste = useAppSelector(selectWaste);

  // useEffect(() => {
  //   console.log("Waste: ", waste);
  // }, [waste]);

  return (
    <div id="waste">
      {waste.slice(-3).map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
}
