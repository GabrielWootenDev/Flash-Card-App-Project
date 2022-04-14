import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

function Card({ card }) {
  const history = useHistory();

  const deleteCardHandler = (cardIdToDelete) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(cardIdToDelete);
      history.go(0);
    }
  };

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
          <button
            className="btn btn-danger ml-2"
            onClick={() => deleteCardHandler(card.id)}
          >
            {" "}
            &#x1f5d1;{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
