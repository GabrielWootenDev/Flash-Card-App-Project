import React from "react";
import CreateDeck from "../Decks/CreateDeck";
import DeckList from "../Decks/DeckList";

function Home() {
  return (
    <>
      <div>
        <CreateDeck />
      </div>
      <div>
          <DeckList />
      </div>
    </>
  );
}
export default Home;
