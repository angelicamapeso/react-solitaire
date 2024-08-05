import React from "react";
import Head from "./Head";
import Tableau from "./Tableau";
import "../styles/app.scss";
import { createDeck, shuffleDeck } from "../util/card";

function App() {
  const cards = createDeck();
  const shuffledCards = shuffleDeck(cards);

  console.log("Cards: ", cards);
  console.log("Shuffled: ", shuffledCards);

  return (
    <div className="App">
      <Head />
      <Tableau />
    </div>
  );
}

export default App;
