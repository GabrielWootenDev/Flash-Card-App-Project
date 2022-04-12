import React from "react";
import Deck from "./Deck";

// todo: add props when appropriate additional functions for Deck are created.

function DeckList({ decks, deleteDeckHandler }) {
  return (
    <div>
      {decks.map((deck) => (
        <Deck deck={deck} key={deck.id} deleteDeckHandler={deleteDeckHandler}/>
      ))}
    </div>
  );
}

export default DeckList;
