export type LocationName = "stock" | "waste" | "tableau" | "foundation";

export interface LocationModel {
  name: LocationName;
  index: number;
  pileIndex?: number;
}
