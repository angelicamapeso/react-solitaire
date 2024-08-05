import React from "react";
import Stock from "../Stock";
import Waste from "../Waste";
import Foundations from "../Foundations";

import "./head.scss";

export default function Head() {
  return (
    <div id="head">
      <div id="stock-waste">
        <Stock />
        <Waste />
      </div>
      <Foundations />
    </div>
  );
}
