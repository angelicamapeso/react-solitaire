import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  addToFoundationReducer,
  moveFromFoundationReducer,
  removeFromFoundationReducer,
  setFoundationReducer,
} from "./reducers";
import { RootState } from "../../store";

export const foundationsSlice = createSlice({
  name: "foundations",
  initialState,
  reducers: {
    set: setFoundationReducer,
    move: moveFromFoundationReducer,
    remove: removeFromFoundationReducer,
    add: addToFoundationReducer,
  },
});

export const { set, move, remove, add } = foundationsSlice.actions;

export const selectFoundations = (state: RootState) => state.foundations.piles;

export default foundationsSlice.reducer;
