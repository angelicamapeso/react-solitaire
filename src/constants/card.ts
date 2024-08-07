import { Rank, Suit } from "../types/Card";

export const BACK_CARD_URL =
  "https://www.deckofcardsapi.com/static/img/back.png";

export const CARD_FACE_URL = "https://deckofcardsapi.com/static/img/";

export const RED_SUITS: Suit[] = ["diamonds", "hearts"];

export const BLACK_SUITS: Suit[] = ["clubs", "spades"];

export const SUITS: Suit[] = [...RED_SUITS, ...BLACK_SUITS];

export const RANKS: Rank[] = [
  "ace",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "jack",
  "queen",
  "king",
];

export const EMPTY_CARD = {
  suit: null,
  rank: null,
  isHidden: null,
};

export const TOTAL_NUM_CARDS = 52;
