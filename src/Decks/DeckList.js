import React from "react";
import Deck from "./Deck";

//maps out our Deck component to create a list of decks from our array of decks in our props.

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
