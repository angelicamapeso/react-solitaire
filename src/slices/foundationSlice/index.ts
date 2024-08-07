import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  addToFoundationReducer,
  moveInFoundationReducer,
  removeFromFoundationReducer,
  setFoundationReducer,
} from "./reducers";
import { RootState } from "../../store";

export const foundationsSlice = createSlice({
  name: "foundations",
  initialState,
  reducers: {
    setFoundations: setFoundationReducer,
    moveInFoundation: moveInFoundationReducer,
    removeFromFoundation: removeFromFoundationReducer,
    addToFoundation: addToFoundationReducer,
  },
});

export const {
  setFoundations,
  moveInFoundation,
  removeFromFoundation,
  addToFoundation,
} = foundationsSlice.actions;

export const selectFoundations = (state: RootState) => state.foundations.piles;

export default foundationsSlice.reducer;
