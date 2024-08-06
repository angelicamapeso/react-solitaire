import React, { useEffect } from "react";
import Head from "../Head";
import Tableau from "../Tableau";
import "./app.scss";
import { createDeck, setupSolitaire, shuffleDeck } from "../../util/setup";
import { useAppDispatch } from "../../hooks/store";
import { set as setTableau } from "../../slices/tableauSlice";
import { set as setStockWaste } from "../../slices/stockWasteSlice";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cards = createDeck();
    const shuffledCards = shuffleDeck(cards);
    const { tableau, stock } = setupSolitaire(shuffledCards);

    dispatch(setTableau({ piles: tableau }));
    dispatch(setStockWaste({ waste: [], stock }));
  });

  return (
    <div className="App">
      <Head />
      <Tableau />
    </div>
  );
}
