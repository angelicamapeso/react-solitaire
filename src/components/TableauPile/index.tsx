import React from "react";
import Card from "../Card";
import "./tableauPile.scss";
import { CardModel } from "../../types/Card";

type Props = {
  cards?: CardModel[];
};

export default function TableauPile({ cards }: Props) {
  return (
    <div className="pile">
      {!cards ? (
        <Card />
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
