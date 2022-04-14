import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  if (!cards) return <p> loading... </p>
    return (
      <>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </>
    );
}

export default CardList;
