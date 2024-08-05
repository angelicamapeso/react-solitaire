import React from "react";

import { CardModel } from "../../types/Card";
import { BACK_CARD_URL } from "../../constants/card";
import "./card.scss";
import { getFaceCardUrl } from "../../util/card";

type Props = {
  card?: CardModel;
};

export default function Card({ card }: Props) {
  return (
    <div className={`card ${!card ? "placeholder" : ""}`}>
      <img
        className="card-img"
        src={card && !card.isHidden ? getFaceCardUrl(card) : BACK_CARD_URL}
        alt={
          card && !card.isHidden
            ? `${card.rank} of ${card.suit}`
            : `${card ? "Hidden" : "Empty"} Card`
        }
      />
    </div>
  );
}
