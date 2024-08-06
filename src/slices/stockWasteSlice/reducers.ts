import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { StockWasteState } from "./state";

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
      .splice(updatedStock.length - 3, 3)
      .map((card) => {
        card.isHidden = false;
        return card;
      });

    state.waste = [...state.waste, ...cardsToMove.reverse()];
    state.stock = updatedStock;
  } else {
    const updatedStock = [...state.waste].reverse().map((card) => {
      card.isHidden = true;
      return card;
    });
    state.stock = updatedStock;
    state.waste = [];
  }
};
