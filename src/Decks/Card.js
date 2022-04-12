import React from "react";
import { Link } from "react-router-dom";

// add button functionality

function Card({ card }) {
  return (
    <div className="card">
      <div className="container">
        <div className="row pb-2 pt-2">
          <div className="col">{card.front}</div>
          <div className="col">{card.back}</div>
        </div>
        <div className="d-flex row justify-content-end m-2">
          <Link
            to={`/decks/${card.deckId}/cards/${card.id}/edit`}
            className="btn btn-secondary text-white"
          >
            &#128393; Edit
          </Link>
          <button className="btn btn-danger ml-2"> &#x1f5d1; </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
