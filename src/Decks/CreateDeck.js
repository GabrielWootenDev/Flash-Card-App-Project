import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <Link to="/decks/new" className="btn btn-secondary">
      &#10133; Create Deck
    </Link>
  );
}

export default CreateDeck;
