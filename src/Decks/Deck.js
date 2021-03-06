import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, deleteDeckHandler }) {

  //display the information of a specific deck with our deleteDeckHandler attached to the delete button, used in decklists to create a list of decks for the homepage.

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
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          &#x1f441;View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          &#128218;Study
        </Link>
        <button className="btn btn-danger float-right" type="submit" onClick={() => deleteDeckHandler(deck.id)}>&#x1f5d1;</button>
      </div>
    </div>
  );
}

export default Deck;
