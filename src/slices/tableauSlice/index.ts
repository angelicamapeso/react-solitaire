import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { setTableauReducer } from "./reducers";
import { RootState } from "../../store";

export const tableauSlice = createSlice({
  name: "tableau",
  initialState,
  reducers: {
    set: setTableauReducer,
  },
});

export const { set } = tableauSlice.actions;

export const selectTableau = (state: RootState) => state.tableau.piles;

export default tableauSlice.reducer;
