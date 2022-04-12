import React from "react";
import { Link } from "react-router-dom";
import CardList from "./CardList";

function ViewDeck({ deck, deleteDeckHandler }) {
  const { cards } = deck;
  
//check on delete button routing after delete
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
        <Link to="" className="btn btn-secondary mr-2">
          &#128393; Edit
        </Link>
        <Link to="" className="btn btn-primary mr-2">
          &#128218;Study
        </Link>
        <Link to="" className="btn btn-primary">
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
