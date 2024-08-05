import { CardModel } from "../../types/Card";

export interface StockWasteState {
  stock: CardModel[];
  waste: CardModel[];
  wasteStartIndex: number;
}

export const initialState: StockWasteState = {
  stock: [],
  waste: [],
  wasteStartIndex: 0,
};
