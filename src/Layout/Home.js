import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeckList from "../Decks/DeckList";
import { listDecks } from "../utils/api";

function Home({ deleteDeckHandler}) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      try {
        const response = await listDecks();
        setDecks(response);
      } catch (error) {
        console.log("Load deck error:", error);
      }
    }
    loadDecks();
  }, []);

  return (
    <>
      <div>
        <Link to="/decks/new" className="btn btn-secondary">
          &#10133; Create Deck
        </Link>
      </div>
      <div>
        <DeckList decks={decks} deleteDeckHandler={deleteDeckHandler}/>
      </div>
    </>
  );
}
export default Home;
