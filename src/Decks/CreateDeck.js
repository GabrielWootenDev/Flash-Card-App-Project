import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <Link to="/decks/new">
      <button type="button"><span className="font-weight-bold">+</span> Create Deck</button>
    </Link>
  );
}

export default CreateDeck;
