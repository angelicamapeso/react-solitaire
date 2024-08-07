import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../../types/Card";
import { FoundationState } from "./state";
import { addToPile, removeFromPile } from "../../util/pile";
import { markFoundationLocation } from "../../util/location";
import { checkHasWon } from "../../util/rules";

export const setFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationState>
> = (state, action) => {
  return action.payload;
};

interface FoundationMovePayload {
  prevPileIndex: number;
  targetPileIndex: number;
}

export const moveInFoundationReducer: CaseReducer<
  FoundationState,
  PayloadAction<FoundationMovePayload>
> = (state, action) => {
  const { prevPileIndex, targetPileIndex } = action.payload;

  const { updatedPile: oldPile, cards } = removeFromPile(
    state.piles[prevPileIndex]
  );
  const cardRemoved = cards[0];

  if (cardRemoved != null) {
    const newCard = { ...cardRemoved } as CardModel;
    markFoundationLocation(
      newCard,
      targetPileIndex,
      state.piles[targetPileIndex].length
    );

    const { updatedPile: newPile } = addToPile(state.piles[targetPileIndex], [
      newCard,
    ]);

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

  const newCard = { ...card } as CardModel;
  markFoundationLocation(newCard, pileIndex, state.piles[pileIndex].length);

  const { updatedPile } = addToPile(state.piles[pileIndex], [newCard]);

  state.piles[pileIndex] = updatedPile;

  if (checkHasWon(state.piles)) {
    state.hasWon = true;
  }
};
