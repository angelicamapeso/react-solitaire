import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { StockWasteState } from "./state";

export const setStockWasteReducer: CaseReducer<
  StockWasteState,
  PayloadAction<StockWasteState>
> = (state, action) => {
  state = action.payload;
};
