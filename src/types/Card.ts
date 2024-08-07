import { LocationModel } from "./Location";

export type Suit = "hearts" | "diamonds" | "spades" | "clubs";
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
  | "ace";

export interface CardModel {
  suit: Suit | null;
  rank: Rank | null;
  isHidden: boolean | null;
  location?: LocationModel;
}
