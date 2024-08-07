import { addToFoundationFromOther } from "../actions/ruleActions";
import { moveInFoundation } from "../slices/foundationSlice";
import { removeFromWaste } from "../slices/stockWasteSlice";
import { removeFromTableau } from "../slices/tableauSlice";
import { AppDispatch } from "../store";
import { CardModel } from "../types/Card";
import { getColour, getNextRank, getPreviousRank, isEmpty } from "./card";

export function canDrag(card: CardModel) {
  if (card.location?.name === "waste-display") {
    return card.location.isLast;
  } else {
    return !card.isHidden;
  }
}

export function canDrop(item: CardModel, target: CardModel) {
  if (
    target.location &&
    target.location.name !== "stock" &&
    target.location.name !== "waste"
  ) {
    if (target.location.name === "foundation") {
      return canDropFoundation(item, target);
    } else if (target.location.name === "tableau") {
      return canDropTableau(item, target);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function canDropFoundation(item: CardModel, target: CardModel) {
  return (
    (item.suit === target.suit && item.rank === getNextRank(target.rank)) ||
    (isEmpty(target) && item.rank === "ace")
  );
}

export function canDropTableau(item: CardModel, target: CardModel) {
  return item.rank === getPreviousRank(target.rank);
}

export function handleFoundationDrop(
  dispatch: AppDispatch,
  item: CardModel,
  target: CardModel
) {
  if (item.location?.name === "tableau") {
    dispatch(
      addToFoundationFromOther(
        item,
        target,
        removeFromTableau({ pileIndex: item.location?.pileIndex as number })
      )
    );
  } else if (item.location?.name === "waste-display") {
    dispatch(addToFoundationFromOther(item, target, removeFromWaste()));
  } else {
    dispatch(
      moveInFoundation({
        prevPileIndex: item.location?.pileIndex as number,
        targetPileIndex: target.location?.pileIndex as number,
      })
    );
  }
}
