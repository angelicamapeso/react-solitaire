import React from "react";
import Stock from "./Stock.jsx";
import Waste from "./Waste.jsx";
import Foundations from "./Foundations.jsx";

import "../styles/head.scss";

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
