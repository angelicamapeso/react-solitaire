import { CardModel } from "../../types/Card";

export interface FoundationState {
  piles: CardModel[][];
}

export const initialState: FoundationState = {
  piles: [[], [], [], []],
};
