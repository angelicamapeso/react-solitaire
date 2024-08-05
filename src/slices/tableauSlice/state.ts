import { CardModel } from "../../types/Card";

export interface TableauState {
  piles: CardModel[][];
}

export const initialState: TableauState = {
  piles: [[], [], [], [], [], [], []],
};
