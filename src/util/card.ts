import { RANKS, SUITS } from "../constants/card";
import { Card } from "../types/Card";

export function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        rank: rank,
        suit: suit,
      });
    }
  }
  return deck;
}

// Using Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
export function shuffleDeck(cards: Card[]): Card[] {
  const cardCopy = [...cards];
  let currIndex = cardCopy.length;

  while (currIndex !== 0) {
    const randIndex = Math.floor(Math.random() * currIndex);
    currIndex--;

    const temp = cardCopy[currIndex];
    cardCopy[currIndex] = cardCopy[randIndex];
    cardCopy[randIndex] = temp;
  }
  return cardCopy;
}
