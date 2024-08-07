import React, { useEffect } from "react";
import Head from "../Head";
import Tableau from "../Tableau";
import "./app.scss";
import { createDeck, setupSolitaire, shuffleDeck } from "../../util/setup";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setTableau } from "../../slices/tableauSlice";
import { setStockWaste } from "../../slices/stockWasteSlice";
import { selectHasWon } from "../../slices/foundationSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const hasWon = useAppSelector(selectHasWon);

  useEffect(() => {
    const cards = createDeck();
    const shuffledCards = shuffleDeck(cards);
    const { tableau, stock } = setupSolitaire(shuffledCards);

    dispatch(setTableau({ piles: tableau }));
    dispatch(setStockWaste({ waste: [], wasteDisplay: [], stock }));
  }, []);

  useEffect(() => {
    console.log("You won!");
  }, [hasWon]);

  return (
    <div className="App">
      <Head />
      <Tableau />
    </div>
  );
}
