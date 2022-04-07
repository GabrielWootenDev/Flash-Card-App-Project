import React from "react";
import Deck from "./Deck";

function DeckList({decks}) {
  return (
    <ul>
        {decks.map((deck) => <Deck deck={deck}/>)}
    </ul>
  );
}

export default DeckList;
