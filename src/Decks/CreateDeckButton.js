import React from "react";
import { Link } from "react-router-dom";

function CreateDeckButton() {
  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary">
        &#10133; Create Deck
      </Link>
    </div>
  );
}

export default CreateDeckButton;
