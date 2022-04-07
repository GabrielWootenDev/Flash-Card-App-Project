import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <Link to="/decks/new">
      <button type="button">+ Create Deck</button>
    </Link>
  );
}

export default CreateDeck;
