import React from "react";

import { BACK_CARD_URL } from "../constants/card";
import "../styles/stock.scss";

export default function Stock() {
  return (
    <button id="stock" className="card">
      <img className="card-img" alt="Stock Pile" src={BACK_CARD_URL} />
    </button>
  );
}
