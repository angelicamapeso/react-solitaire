import React from "react";
import Card from "./Card";
import "../styles/pile.scss";
import { CardModel } from "../types/Card";

type Props = {
  cards?: CardModel[];
};

export default function Pile({ cards }: Props) {
  return (
    <div className="pile">
      {!cards ? (
        <Card />
      ) : (
        cards.map((card, index) => (
          <Card key={index} card={card} isHidden={index !== cards.length - 1} />
        ))
      )}
    </div>
  );
}
