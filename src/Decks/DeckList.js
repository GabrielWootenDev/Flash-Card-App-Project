import React from "react";
import Deck from "./Deck";

// todo: add props when appropriate additional functions for Deck are created.

function DeckList({ decks }) {
  return (
    <div>
      {decks.map((deck) => (
        <Deck deck={deck} key={deck.id}/>
      ))}
    </div>
  );
}

export default DeckList;
