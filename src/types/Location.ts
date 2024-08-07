export type LocationName =
  | "stock"
  | "waste"
  | "waste-display"
  | "tableau"
  | "foundation";

export interface LocationModel {
  name: LocationName;
  index: number;
  pileIndex?: number;
  isLast?: boolean;
}
