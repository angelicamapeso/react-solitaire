import React from "react";

import { CardModel } from "../../types/Card";
import { BACK_CARD_URL } from "../../constants/card";
import "./card.scss";
import { getFaceCardUrl, isEmpty } from "../../util/card";
import { DragTypes } from "../../types/DragTypes";
import { useDrag, useDrop } from "react-dnd";

type Props = {
  card: CardModel;
};

export default function Card({ card }: Props) {
  const [_, drag] = useDrag(() => ({
    type: DragTypes.CARD,
    item: () => card,
    canDrag: () => (card && !card.isHidden) as boolean,
  }));

  const [, drop] = useDrop(() => ({
    accept: [DragTypes.CARD, DragTypes.PILE],
    drop: (item: CardModel) => {
      console.log("item", item);
      console.log("target:", card);
    },
  }));

  return (
    <div
      ref={card?.location?.name !== "tableau" ? drag : null}
      className={`card ${isEmpty(card) ? "placeholder" : ""}`}
    >
      <img
        ref={drop}
        className="card-img"
        src={
          !isEmpty(card) && !card.isHidden
            ? getFaceCardUrl(card)
            : BACK_CARD_URL
        }
        alt={
          !isEmpty(card) && !card.isHidden
            ? `${card.rank ?? ""} of ${card.suit ?? ""}`
            : !isEmpty(card)
            ? "Hidden Card"
            : "Empty Slot"
        }
      />
    </div>
  );
}
