import React from "react";
import { Link } from "react-router-dom";

//todo: link buttons to appropriate functions and components and add the text for # of child cards in the deck.
function Deck({ deck }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="card-title">{deck.name}</h5>
          </div>
          <div >
            <p className="text-secondary">{deck.cards.length} cards</p>
          </div>
        </div>
        <p className="card-text">{deck.description}</p>
        <Link to="" className="btn btn-secondary mr-2">
          &#x1f441;View
        </Link>
        <Link to="" className="btn btn-primary">
          &#128218;Study
        </Link>
        <Link to="" className="btn btn-danger float-right">
          &#x1f5d1;
        </Link>
      </div>
    </div>
  );
}

export default Deck;
