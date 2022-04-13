import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import CardList from "./CardList";
import { readDeck } from "../utils/api";

//implement edit buttons here and on cards

function ViewDeck( { deleteDeckHandler }) {
  const [deck, setDeck] = useState([]);

  const { deckId } = useParams();

  useEffect(() => {
    async function loadDecks() {
      try {
        const response = await readDeck(deckId);
        setDeck(response);
      } catch (error) {
        console.log("Load deck error: ", error);
      }
    }
    loadDecks();
  }, [deckId]);



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
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
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
        <CardList cards={deck.cards} key={deck.id} />
      </div>
    </>
  );
}

export default ViewDeck;
