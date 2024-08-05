import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../../types/Card";
import { FoundationState } from "./state";
import { addToPile, removeFromPile } from "../../util/pile";

export const setFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationState>
> = (state, action) => {
  state.piles = action.payload.piles;
};

interface FoundationMovePayload {
  prevPileIndex: number;
  targetPileIndex: number;
}

export const moveFromFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationMovePayload>
> = (state, action) => {
  const { prevPileIndex, targetPileIndex } = action.payload;
  const { updatedPile: oldPile, card: cardRemoved } = removeFromPile(
    state.piles[prevPileIndex]
  );

  if (cardRemoved != null) {
    const { updatedPile: newPile } = addToPile(
      state.piles[targetPileIndex],
      cardRemoved
    );
    state.piles[prevPileIndex] = oldPile;
    state.piles[targetPileIndex] = newPile;
  }
};

export interface FoundationRemovePayload {
  pileIndex: number;
}

export const removeFromFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationRemovePayload>
> = (state, action) => {
  const { pileIndex } = action.payload;
  const { updatedPile } = removeFromPile(state.piles[pileIndex]);

  state.piles[pileIndex] = updatedPile;
};

export interface FoundationAddPayload {
  pileIndex: number;
  card: CardModel;
}

export const addToFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationAddPayload>
> = (state, action) => {
  const { pileIndex, card } = action.payload;
  const { updatedPile } = addToPile(state.piles[pileIndex], card);

  state.piles[pileIndex] = updatedPile;
};
