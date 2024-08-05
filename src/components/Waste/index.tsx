import React from "react";
import Card from "../Card";

import "./waste.scss";
import { useAppSelector } from "../../hooks/store";
import { selectWaste } from "../../slices/stockWasteSlice";

export default function Waste() {
  const waste = useAppSelector(selectWaste);

  return (
    <div id="waste">
      {waste.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
}
