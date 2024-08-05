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

export interface Card {
  suit: Suit;
  rank: Rank;
  //TODO: Add image here
}
