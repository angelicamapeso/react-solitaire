import { LocationModel } from "./Location";

export type Suit = "hearts" | "diamonds" | "spades" | "clubs" | null;
export type Rank =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | "king"
  | "queen"
  | "jack"
  | "ace"
  | null;

export interface CardModel {
  suit: Suit;
  rank: Rank;
  isHidden: boolean | null;
  location?: LocationModel;
}
