import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import ViewDeck from "../Decks/ViewDeck";
import StudyDeck from "../Decks/StudyDeck";
import CreateEditDeck from "../Decks/Create-EditDeck";
import CreateEditCard from "../Cards/Create-EditCard";

//Decks hold the routing for all components with :deckId paths.

function Decks({ deleteDeckHandler }) {
  //our deck state starts here and is passed from here to all relevant components that require information on the current deckId.
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();


  useEffect(() => {
    async function loadDecks() {
      try {
        const response = await readDeck(deckId);
        const deckFromAPI = await response;
        setDeck(deckFromAPI);
      } catch (error) {
        console.log("Load deck error: ", error);
      }
    }
    loadDecks();
  }, [deckId]);

  useEffect(() => {
    setCards(deck.cards);
  }, [deck]);

  //created logic below to display loading when the deck is still being fetched from the API as not to cause undefined type errors.

  return (
    <>
      <Switch>
        <Route path="/decks/:deckId/cards/new">
          <CreateEditCard deck={deck} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CreateEditCard deck={deck} />
        </Route>
        <Route path="/decks/:deckId/edit">
          <CreateEditDeck deck={deck} />
        </Route>
        <Route path="/decks/:deckId/study">
          {deck && cards ? (
            <StudyDeck deck={deck} cards={cards} cardsLength={cards.length} />
          ) : (
            <p>loading...</p>
          )}
        </Route>
        <Route path="/decks/:deckId/">
          {deck ? (
            <ViewDeck
              deck={deck}
              cards={cards}
              deleteDeckHandler={deleteDeckHandler}
            />
          ) : (
            <p>loading...</p>
          )}
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
