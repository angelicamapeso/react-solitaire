import React, { useEffect } from "react";

import { BACK_CARD_URL } from "../../constants/card";
import "./stock.scss";
import { useAppSelector } from "../../hooks/store";
import { selectStock } from "../../slices/stockWasteSlice";
import Card from "../Card";

export default function Stock() {
  const stock = useAppSelector(selectStock);
  useEffect(() => {
    console.log("Stock: ", stock);
  });

  return (
    <button id="stock" className="card">
      {stock.length > 0 ? (
        <img className="card-img" alt="Stock Pile" src={BACK_CARD_URL} />
      ) : (
        <Card />
      )}
    </button>
  );
}
