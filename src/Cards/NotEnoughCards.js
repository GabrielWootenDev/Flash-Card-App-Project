import React from "react";
import { Link } from "react-router-dom";


function NotEnoughCards({deck}) {
    return (
      <div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
        <h1>Study: {deck.name}</h1>
        <p />
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study.</p>

        <Link to={`/decks/${deck.id}/cards/new`}>
          <button type="button" className="btn btn-primary">
            Add Cards
          </button>
        </Link>
      </div>
    );
}

export default NotEnoughCards;