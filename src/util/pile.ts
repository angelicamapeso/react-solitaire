import { CardModel } from "../types/Card";

export function removeFromPile(pile: CardModel[]) {
  const updatedPile = [...pile];
  const card = updatedPile.pop();
  return { updatedPile, card };
}

export function addToPile(pile: CardModel[], card: CardModel) {
  const updatedPile = [...pile];
  updatedPile.push(card);
  return { updatedPile };
}
