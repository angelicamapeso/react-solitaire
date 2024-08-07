import { CardModel } from "../types/Card";

export function removeFromPile(pile: CardModel[], index?: number) {
  const updatedPile = [...pile];

  let card;
  if (index != null) {
    card = updatedPile.splice(index, 1)[0];
  } else {
    card = updatedPile.pop();
  }

  return { updatedPile, card };
}

export function addToPile(pile: CardModel[], card: CardModel) {
  const updatedPile = [...pile];
  updatedPile.push(card);
  return { updatedPile };
}
