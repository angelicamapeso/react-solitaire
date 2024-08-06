import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { StockWasteState } from "./state";
import { markStockLocation, markWasteLocation } from "../../util/location";

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
      .reverse()
      .map((card, i) => {
        card.isHidden = false;
        markWasteLocation(card, i + state.waste.length);
        return card;
      });

    state.waste = [...state.waste, ...cardsToMove];
    state.stock = updatedStock;
  } else {
    const updatedStock = [...state.waste].reverse().map((card, i) => {
      card.isHidden = true;
      markStockLocation(card, i);
      return card;
    });
    state.stock = updatedStock;
    state.waste = [];
  }
};
