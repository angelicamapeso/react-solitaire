import { CardModel } from "../../types/Card";

export interface StockWasteState {
  stock: CardModel[];
  waste: CardModel[];
}

export const initialState: StockWasteState = {
  stock: [],
  waste: [],
};
