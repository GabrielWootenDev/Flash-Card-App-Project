import React from "react";
import { Link } from "react-router-dom";

function StudyCards({deck, cards, cardIndex, cardFront, flipButtonHandler}) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <div className="mt-2 mb-3">
        <h2>Study: {deck.name}</h2>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Card {cardIndex + 1} of {cards.length}
            </h4>
            <div>
              {cardFront ? (
                <p className="card-text">{cards[cardIndex].front}</p>
              ) : (
                <p className="card-text">{cards[cardIndex].back}</p>
              )}
            </div>
            <button
              className="btn btn-secondary"
              onClick={flipButtonHandler}
            >
              Flip
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyCards;
