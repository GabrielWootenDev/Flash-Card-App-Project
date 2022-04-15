import React from "react";
import { Link } from "react-router-dom";
import CardList from "../Cards/CardList";

//renders a the information of a single deck, with multiple buttons attached to manipulate the data of the deck, or study the information contained. Renders our CardList component below to display the same information and similar buttons on the cards.

function ViewDeck( { deck, cards, deleteDeckHandler }) {

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page"> 
            {deck.name}
          </li> 
        </ol>
      </nav>
      <div className="mt-2 mb-3">
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-text">{deck.description}</p>
        <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
          &#128393; Edit
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
          &#128218;Study
        </Link>
        <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
          &#10133; Add Cards
        </Link>
        <button
          className="btn btn-danger float-right"
          type="submit"
          onClick={() => deleteDeckHandler(deck.id)}
        >
          &#x1f5d1;
        </button>
      </div>
      <div>
        <h2>Cards</h2>
        <CardList cards={cards} key={deck.id} />
      </div>
    </>
  );
}

export default ViewDeck;
