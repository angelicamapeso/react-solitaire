import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

import "./waste.scss";
import { useAppSelector } from "../../hooks/store";
import { selectWaste } from "../../slices/stockWasteSlice";

export default function Waste() {
  const waste = useAppSelector(selectWaste);

  useEffect(() => {
    console.log("Waste: ", waste);
  }, [waste]);

  return (
    <div id="waste">
      {waste.slice(-3).map((card, i) => (
        <Card key={uuidv4()} card={card} />
      ))}
    </div>
  );
}
