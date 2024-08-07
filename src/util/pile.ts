import { CardModel } from "../types/Card";

export function removeFromPile(
  pile: CardModel[],
  start?: number,
  end?: number
) {
  const updatedPile = [...pile];

  let cards = [];
  if (start != null && end != null) {
    cards = updatedPile.splice(start, end);
  } else if (start != null && end == null) {
    cards = updatedPile.splice(start, 1);
  } else {
    const removed = updatedPile.pop();
    cards = removed ? [removed] : [];
  }

  return { updatedPile, cards };
}

export function addToPile(pile: CardModel[], cards: CardModel[]) {
  const updatedPile = [...pile, ...cards];
  return { updatedPile };
}
