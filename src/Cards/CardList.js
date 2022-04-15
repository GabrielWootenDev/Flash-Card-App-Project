import React from "react";
import Card from "./Card";

//this component maps out our cards array into a rendered list of card information.
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
