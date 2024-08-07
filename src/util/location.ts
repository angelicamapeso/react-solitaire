import { CardModel } from "../types/Card";

export function markTableauLocation(
  card: CardModel,
  pileIndex: number,
  index: number
) {
  card.location = {
    name: "tableau",
    pileIndex,
    index,
  };
}

export function markStockLocation(card: CardModel, index: number) {
  card.location = {
    name: "stock",
    index,
  };
}

export function markWasteLocation(card: CardModel, index: number) {
  card.location = {
    name: "waste",
    index,
  };
}

export function markwasteDisplayLocation(
  card: CardModel,
  index: number,
  isLast: boolean
) {
  card.location = {
    name: "waste-display",
    index,
    isLast,
  };
}

export function markFoundationLocation(
  card: CardModel,
  pileIndex: number,
  index: number
) {
  card.location = {
    name: "foundation",
    pileIndex,
    index,
  };
}
