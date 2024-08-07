import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TableauState } from "./state";
import { addToPile, removeFromPile } from "../../util/pile";
import { markTableauLocation } from "../../util/location";
import { CardModel } from "../../types/Card";

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

  if (updatedPile.length > 0 && updatedPile[updatedPile.length - 1].isHidden) {
    updatedPile[updatedPile.length - 1].isHidden = false;
  }

  state.piles[pileIndex] = updatedPile;
};

export interface TableauMovePayload {
  card: CardModel;
  targetPileIndex: number;
}

export const moveInTableauReducer: CaseReducer<
  TableauState,
  PayloadAction<TableauMovePayload>
> = (state, action) => {
  const { card, targetPileIndex } = action.payload;

  const prevPileIndex = card.location?.pileIndex;

  if (prevPileIndex != null && card.location != null) {
    const { updatedPile: oldPile, cards: cardsRemoved } = removeFromPile(
      state.piles[prevPileIndex],
      card.location.index,
      state.piles[prevPileIndex].length
    );

    if (oldPile.length > 0 && oldPile[oldPile.length - 1].isHidden) {
      oldPile[oldPile.length - 1].isHidden = false;
    }

    const newCards = cardsRemoved.map((newCard, i) => {
      markTableauLocation(
        newCard,
        targetPileIndex,
        state.piles[targetPileIndex].length + i
      );
      return newCard;
    });

    const { updatedPile: newPile } = addToPile(
      state.piles[targetPileIndex],
      newCards
    );

    state.piles[prevPileIndex] = oldPile;
    state.piles[targetPileIndex] = newPile;
  }
};

export interface TableauAddPayload {
  pileIndex: number;
  card: CardModel;
}

export const addToTableauReducer: CaseReducer<
  TableauState,
  PayloadAction<TableauAddPayload>
> = (state, action) => {
  const { pileIndex, card } = action.payload;

  const newCard = { ...card } as CardModel;
  markTableauLocation(newCard, pileIndex, state.piles[pileIndex].length);

  const { updatedPile } = addToPile(state.piles[pileIndex], [newCard]);

  state.piles[pileIndex] = updatedPile;
};
