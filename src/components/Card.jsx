import React from "react";

import { BACK_CARD_URL } from "../constants/card.js";
import "../styles/card.scss";

export default function Placeholder({ card }) {
  return (
    <div className={`card ${!card && "placeholder"}`}>
      <img
        className="card-img"
        src={BACK_CARD_URL}
        alt="Placeholder for a card"
      />
    </div>
  );
}
