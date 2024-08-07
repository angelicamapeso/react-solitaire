import React from "react";
import Card from "../Card";
import "./tableauPile.scss";
import { CardModel } from "../../types/Card";
import { DragTypes } from "../../types/DragTypes";
import { useDrag } from "react-dnd";
import { EMPTY_CARD } from "../../constants/card";

type Props = {
  cards?: CardModel[];
  pileIndex?: number;
};

export default function TableauPile({ cards, pileIndex }: Props) {
  const [_, drag] = useDrag(() => ({
    type: DragTypes.PILE,
    item: () => (cards && cards.length > 0 ? cards[0] : null),
    canDrag: () => (cards && cards.length > 0 && !cards[0].isHidden) as boolean,
  }));

  return (
    <div className="pile" ref={drag}>
      {!cards || cards.length === 0 ? (
        <Card
          card={{
            ...EMPTY_CARD,
            location: {
              name: "tableau",
              pileIndex,
              index: 0,
            },
          }}
        />
      ) : (
        <>
          {cards.length > 0 ? <Card card={cards[0]} /> : null}
          {cards.slice(1, cards.length).length > 0 ? (
            <div className="pile-wrapper">
              <TableauPile cards={cards.slice(1, cards.length)} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
