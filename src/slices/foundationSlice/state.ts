import { CardModel } from "../../types/Card";

export interface FoundationState {
  piles: CardModel[][];
  hasWon: boolean;
}

export const initialState: FoundationState = {
  piles: [[], [], [], []],
  hasWon: false,
};
