import { CardModel } from "../types/Card";
import { CARD_FACE_URL } from "../constants/card";

// CardModel images currently from: https://www.deckofcardsapi.com/
export function getFaceCardUrl(card: CardModel) {
  const { suit, rank } = card;

  let urlSuit: string = suit?.slice(0, 1)?.toUpperCase() ?? "";

  let urlRank: string = `${rank}`;
  if (typeof rank === "string") {
    urlRank = rank.slice(0, 1).toUpperCase();
  } else if (rank === 10) {
    urlRank = "0";
  }

  return CARD_FACE_URL + urlRank + urlSuit + ".png";
}

export function isEmpty(card: CardModel) {
  return !card.suit && !card.rank;
}
