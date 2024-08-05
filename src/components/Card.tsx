import React from "react";

import { CardModel } from "../types/Card";
import { BACK_CARD_URL } from "../constants/card";
import "../styles/card.scss";
import { getFaceCardUrl } from "../util/card";

type Props = {
  card?: CardModel;
  isHidden?: boolean;
};

export default function Card({ card, isHidden = true }: Props) {
  return (
    <div className={`card ${!card ? "placeholder" : ""}`}>
      <img
        className="card-img"
        src={card && !isHidden ? getFaceCardUrl(card) : BACK_CARD_URL}
        alt={
          card && !isHidden
            ? `${card.rank} of ${card.suit}`
            : `${card ? "Hidden" : "Empty"} Card`
        }
      />
    </div>
  );
}
