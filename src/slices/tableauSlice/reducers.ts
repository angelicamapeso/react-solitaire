import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TableauState } from "./state";
import { removeFromPile } from "../../util/pile";

export const setTableauReducer: CaseReducer<
  TableauState,
  PayloadAction<TableauState>
> = (state, action) => {
  return action.payload;
};

export interface TableauRemovePayload {
  pileIndex: number;
}

export const removeFromTableauReducer: CaseReducer<
  TableauState,
  PayloadAction<TableauRemovePayload>
> = (state, action) => {
  const { pileIndex } = action.payload;
  const { updatedPile } = removeFromPile(state.piles[pileIndex]);

  if (updatedPile.length > 0) {
    updatedPile[updatedPile.length - 1].isHidden = false;
  }

  state.piles[pileIndex] = updatedPile;
};
