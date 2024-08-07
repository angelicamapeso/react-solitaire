import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  addToTableauReducer,
  moveInTableauReducer,
  removeFromTableauReducer,
  setTableauReducer,
} from "./reducers";
import { RootState } from "../../store";

export const tableauSlice = createSlice({
  name: "tableau",
  initialState,
  reducers: {
    setTableau: setTableauReducer,
    removeFromTableau: removeFromTableauReducer,
    moveInTablueau: moveInTableauReducer,
    addToTableau: addToTableauReducer,
  },
});

export const { setTableau, removeFromTableau, moveInTablueau, addToTableau } =
  tableauSlice.actions;

export const selectTableau = (state: RootState) => state.tableau.piles;

export default tableauSlice.reducer;
