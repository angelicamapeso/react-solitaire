import { RANKS, SUITS } from "../constants/card";
import { CardModel } from "../types/Card";
import { markStockLocation, markTableauLocation } from "./location";

export function createDeck(): CardModel[] {
  const deck: CardModel[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        rank: rank,
        suit: suit,
        isHidden: true,
      });
    }
  }
  return deck;
}

// Using Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
export function shuffleDeck(cards: CardModel[]): CardModel[] {
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

export function setupSolitaire(cards: CardModel[]) {
  // Assume deck is "face up", so we reverse
  const faceDown = [...cards].reverse();
  console.log("total cards: ", faceDown);

  const NUM_TABLEAU_CARDS = 28;
  const tableauCards = faceDown.slice(-1 * NUM_TABLEAU_CARDS);
  const tableau = setupTableau(tableauCards);

  const stock = faceDown
    .slice(0, cards.length - NUM_TABLEAU_CARDS)
    .map((card, i) => {
      markStockLocation(card, i);
      return card;
    });
  return { tableau, stock };
}

export function setupTableau(cards: CardModel[]) {
  const tableauCards = [...cards];
  const tableau: CardModel[][] = [[], [], [], [], [], [], []];

  let startPile = 0;
  let pileIndex = 0;
  while (startPile < tableau.length) {
    const card = tableauCards.pop();

    if (card == null) {
      break;
    }

    tableau[pileIndex].push(card as CardModel);

    if (pileIndex + 1 > tableau.length - 1) {
      startPile += 1;
      pileIndex = startPile;
    } else {
      pileIndex += 1;
    }
  }

  // Flip last card
  for (let p = 0; p < tableau.length; p++) {
    const currentPile = tableau[p];
    currentPile.forEach((card, index) => {
      markTableauLocation(card, p, index);
      if (index === currentPile.length - 1) {
        card.isHidden = false;
      }
    });
  }

  return tableau;
}
