import React from "react";
import Card from "./Card.jsx";
import "../styles/pile.scss";

export default function Pile({ cards }) {
  return <div className="pile">{!cards ? <Card /> : null}</div>;
}
