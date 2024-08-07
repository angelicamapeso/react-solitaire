import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";

import "./waste.scss";
import { useAppSelector } from "../../hooks/store";
import { selectWaste, selectWasteDisplay } from "../../slices/stockWasteSlice";

export default function Waste() {
  const wasteDisplay = useAppSelector(selectWasteDisplay);
  const waste = useAppSelector(selectWaste);

  useEffect(() => {
    console.log("Waste Display: ", wasteDisplay);
  }, [wasteDisplay]);

  useEffect(() => {
    console.log("Waste: ", waste);
  }, [waste]);

  return (
    <div id="waste">
      {wasteDisplay.map((card, i) => (
        <Card key={uuidv4()} card={card} />
      ))}
    </div>
  );
}
