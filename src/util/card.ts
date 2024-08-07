import { CardModel, Rank, Suit } from "../types/Card";
import {
  BLACK_SUITS,
  CARD_FACE_URL,
  RANKS,
  RED_SUITS,
} from "../constants/card";

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

export function getColour(card: CardModel) {
  if (card.suit != null) {
    if (RED_SUITS.includes(card.suit)) {
      return "red";
    } else if (BLACK_SUITS.includes(card.suit)) {
      return "black";
    } else {
      return null;
    }
  }

  return null;
}

export function getNextRank(rank: Rank) {
  if (rank == null) {
    return null;
  }

  let rankIndex = RANKS.findIndex((rankItem) => rankItem === rank);
  if (rankIndex === -1) {
    return null;
  }

  if (rankIndex + 1 > RANKS.length - 1) {
    rankIndex = -1;
  }

  return RANKS[rankIndex + 1];
}

export function getPreviousRank(rank: Rank) {
  if (rank == null) {
    return null;
  }

  let rankIndex = RANKS.findIndex((rankItem) => rankItem === rank);
  if (rankIndex === -1) {
    return null;
  }

  if (rankIndex - 1 < 0) {
    rankIndex = RANKS.length;
  }

  return RANKS[rankIndex - 1];
}
