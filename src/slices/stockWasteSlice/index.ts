import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { nextWasteReducer, setStockWasteReducer } from "./reducers";
import { RootState } from "../../store";

export const stockWasteSlice = createSlice({
  name: "stockWaste",
  initialState,
  reducers: {
    set: setStockWasteReducer,
    nextWaste: nextWasteReducer,
  },
});

export const { set, nextWaste } = stockWasteSlice.actions;

export const selectStock = (state: RootState) => state.stockWaste.stock;

export const selectWaste = (state: RootState) => state.stockWaste.waste;

export default stockWasteSlice.reducer;
