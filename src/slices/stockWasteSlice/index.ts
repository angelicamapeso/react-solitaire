import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { setStockWasteReducer } from "./reducers";
import { RootState } from "../../store";

export const stockWasteSlice = createSlice({
  name: "stockWaste",
  initialState,
  reducers: {
    set: setStockWasteReducer,
  },
});

export const { set } = stockWasteSlice.actions;

export const selectStock = (state: RootState) => state.stockWaste.stock;

export const selectWaste = (state: RootState) => state.stockWaste.waste;

export default stockWasteSlice.reducer;
