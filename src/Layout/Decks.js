import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import ViewDeck from "../Decks/ViewDeck";
import StudyDeck from "../Decks/StudyDeck";
import CreateCard from "../Cards/CreateCard";

//to do study pages, card edit, deck edit, button functions
function Decks({ deleteDeckHandler }) {
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

  return (
    <>
      <Switch>
        <Route path="/decks/:deckId/cards/new">
          <CreateCard deck={deck} />
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
