import React, { useState, useEffect } from "react";
import CreateDeck from "../Decks/CreateDeck";
import DeckList from "../Decks/DeckList";
import { listDecks } from "../utils/api";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks()
    .then((decks) => setDecks([...decks]));
    return () => abortController.abort();
  }, []);

  return (
    <>
      <div>
        <CreateDeck />
      </div>
      <div>
        <DeckList decks={decks}/>
      </div>
    </>
  );
}
export default Home;
