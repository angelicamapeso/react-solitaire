import { CardModel } from "../../types/Card";

export interface StockWasteState {
  stock: CardModel[];
  waste: CardModel[];
  wasteDisplay: CardModel[];
}

export const initialState: StockWasteState = {
  stock: [],
  waste: [],
  wasteDisplay: [],
};
