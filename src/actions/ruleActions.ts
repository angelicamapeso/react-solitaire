import { PayloadAction } from "@reduxjs/toolkit";
import { addToFoundation } from "../slices/foundationSlice";
import { AppDispatch } from "../store";
import { CardModel } from "../types/Card";
import { TableauRemovePayload } from "../slices/tableauSlice/reducers";
import { addToTableau } from "../slices/tableauSlice";
import { FoundationRemovePayload } from "../slices/foundationSlice/reducers";

export function addToFoundationFromOther<
  P extends TableauRemovePayload | undefined
>(item: CardModel, target: CardModel, removeAction: PayloadAction<P, string>) {
  return (dispatch: AppDispatch) => {
    dispatch(
      addToFoundation({
        pileIndex: target.location?.pileIndex as number,
        card: item,
      })
    );
    dispatch(removeAction);
  };
}

export function addToTableauFromOther<
  P extends FoundationRemovePayload | undefined
>(item: CardModel, target: CardModel, removeAction: PayloadAction<P, string>) {
  return (dispatch: AppDispatch) => {
    dispatch(
      addToTableau({
        pileIndex: target.location?.pileIndex as number,
        card: item,
      })
    );
    dispatch(removeAction);
  };
}
