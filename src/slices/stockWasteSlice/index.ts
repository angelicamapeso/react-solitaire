import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  nextWasteReducer,
  removeFromWasteReducer,
  setStockWasteReducer,
} from "./reducers";
import { RootState } from "../../store";

export const stockWasteSlice = createSlice({
  name: "stockWaste",
  initialState,
  reducers: {
    setStockWaste: setStockWasteReducer,
    nextWaste: nextWasteReducer,
    removeFromWaste: removeFromWasteReducer,
  },
});

export const { setStockWaste, nextWaste, removeFromWaste } =
  stockWasteSlice.actions;

export const selectStock = (state: RootState) => state.stockWaste.stock;

export const selectWaste = (state: RootState) => state.stockWaste.waste;

export const selectWasteDisplay = (state: RootState) =>
  state.stockWaste.wasteDisplay;

export default stockWasteSlice.reducer;
