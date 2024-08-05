import React from "react";

import { BACK_CARD_URL } from "../constants/card";
import "../styles/card.scss";

type Props = {
  card?: boolean;
};

export default function Placeholder({ card }: Props) {
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
