import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { StockWasteState } from "./state";
import {
  markStockLocation,
  markwasteDisplayLocation,
  markWasteLocation,
} from "../../util/location";
import { removeFromPile } from "../../util/pile";

export const setStockWasteReducer: CaseReducer<
  StockWasteState,
  PayloadAction<StockWasteState>
> = (state, action) => {
  return action.payload;
};

export const nextWasteReducer: CaseReducer<StockWasteState> = (state) => {
  if (state.stock.length > 0) {
    const updatedStock = [...state.stock];
    const cardsToMove = updatedStock
      .splice(updatedStock.length - 3 >= 0 ? updatedStock.length - 3 : 0, 3)
      .reverse();

    const wasteDisplayCards = cardsToMove.map((card, i) => {
      const newCard = { ...card };
      newCard.isHidden = false;
      markwasteDisplayLocation(newCard, i, i === cardsToMove.length - 1);
      return newCard;
    });

    const wasteCards = cardsToMove.map((card, i) => {
      const newCard = { ...card };
      newCard.isHidden = false;
      markWasteLocation(newCard, i + state.waste.length);
      return newCard;
    });

    state.wasteDisplay = wasteDisplayCards;
    state.waste = [
      ...state.waste.map((wasteCard) => {
        wasteCard.isHidden = true;
        return wasteCard;
      }),
      ...wasteCards,
    ];
    state.stock = updatedStock;
  } else {
    const updatedStock = [...state.waste].reverse().map((card, i) => {
      card.isHidden = true;
      markStockLocation(card, i);
      return card;
    });
    state.stock = updatedStock;
    state.wasteDisplay = [];
    state.waste = [];
  }
};

export const removeFromWasteReducer: CaseReducer<StockWasteState> = (state) => {
  const { updatedPile: updatedWasteDisplay, cards } = removeFromPile(
    state.wasteDisplay
  );

  const removedCard = cards[0];

  if (removedCard != null) {
    const wasteIndex = state.waste.findIndex(
      (wasteCard) =>
        wasteCard.suit === removedCard.suit &&
        wasteCard.rank === removedCard.rank
    );

    if (wasteIndex >= 0) {
      const { updatedPile: updatedWaste } = removeFromPile(
        state.waste,
        wasteIndex
      );

      state.wasteDisplay = updatedWasteDisplay.map((card, i) => {
        const updatedCard = { ...card };
        markwasteDisplayLocation(
          updatedCard,
          i,
          i === updatedWasteDisplay.length - 1
        );
        return updatedCard;
      });

      state.waste = updatedWaste.map((card, i) => {
        const updatedCard = { ...card };
        markWasteLocation(updatedCard, i);
        return updatedCard;
      });
    }
  }
};
