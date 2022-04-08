import React from "react";
import { Link } from "react-router-dom";
import DeckList from "../Decks/DeckList";

function Home({ decks }) {
  return (
    <>
      <div>
        <Link to="/decks/new" className="btn btn-secondary">
          &#10133; Create Deck
        </Link>
      </div>
      <div>
        <DeckList decks={decks} />
      </div>
    </>
  );
}
export default Home;
