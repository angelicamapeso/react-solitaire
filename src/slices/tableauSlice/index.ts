import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { removeFromTableauReducer, setTableauReducer } from "./reducers";
import { RootState } from "../../store";

export const tableauSlice = createSlice({
  name: "tableau",
  initialState,
  reducers: {
    setTableau: setTableauReducer,
    removeFromTableau: removeFromTableauReducer,
  },
});

export const { setTableau, removeFromTableau } = tableauSlice.actions;

export const selectTableau = (state: RootState) => state.tableau.piles;

export default tableauSlice.reducer;
