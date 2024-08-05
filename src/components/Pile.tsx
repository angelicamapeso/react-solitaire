import React from "react";
import Card from "./Card";
import "../styles/pile.scss";

type Props = {
  cards?: any[];
};

export default function Pile({ cards }: Props) {
  return <div className="pile">{!cards ? <Card /> : null}</div>;
}
