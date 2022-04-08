import React from "react";
import CreateDeck from "../Decks/CreateDeck";
import DeckList from "../Decks/DeckList";

function Home({decks}) {

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
