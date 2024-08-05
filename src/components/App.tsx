import React, { useEffect } from "react";
import Head from "./Head";
import Tableau from "./Tableau";
import "../styles/app.scss";
import { createDeck, setupSolitaire, shuffleDeck } from "../util/setup";
import { useAppDispatch } from "../hooks/store";
import { set as setTableau } from "../slices/tableauSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cards = createDeck();
    const shuffledCards = shuffleDeck(cards);
    const { tableau } = setupSolitaire(shuffledCards);

    dispatch(setTableau({ piles: tableau }));
  });

  return (
    <div className="App">
      <Head />
      <Tableau />
    </div>
  );
}

export default App;
