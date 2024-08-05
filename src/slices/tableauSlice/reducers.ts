import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TableauState } from "./state";

export const setTableauReducer: CaseReducer<
  TableauState,
  PayloadAction<TableauState>
> = (state, action) => {
  return action.payload;
};
