import React from "react";
import { Link } from "react-router-dom";

//renders in a single cards information to be studied, using logic in the html to show only the front or backside depending on the value of "cardFront"

function StudyCards({
  deck,
  cards,
  cardIndex,
  cardFront,
  flipButtonHandler,
  nextButtonHandler,
}) {
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
                <>
                  <p className="card-text m-2">{cards[cardIndex].front}</p>
                  <button
                    className="btn btn-secondary m-1"
                    onClick={flipButtonHandler}
                  >
                    Flip
                  </button>
                </>
              ) : (
                <>
                  <p className="card-text m-2">{cards[cardIndex].back}</p>
                  <button
                    className="btn btn-secondary m-1"
                    onClick={flipButtonHandler}
                  >
                    Flip
                  </button>
                  <button
                    className="btn btn-primary m-1"
                    onClick={nextButtonHandler}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyCards;
