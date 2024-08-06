import React, { useEffect } from "react";

import { BACK_CARD_URL } from "../../constants/card";
import "./stock.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { nextWaste, selectStock } from "../../slices/stockWasteSlice";
import Card from "../Card";

export default function Stock() {
  const stock = useAppSelector(selectStock);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Stock", stock);
  }, [stock]);

  const onStockClick = () => {
    dispatch(nextWaste());
  };

  return (
    <button id="stock" className="card" onClick={() => onStockClick()}>
      {stock.length > 0 ? (
        <img className="card-img" alt="Stock Pile" src={BACK_CARD_URL} />
      ) : (
        <Card />
      )}
    </button>
  );
}
