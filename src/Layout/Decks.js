import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import NewDeck from "../Decks/NewDeck";
import ViewDeck from "../Decks/ViewDeck";
import { readDeck } from "../utils/api";

function Decks() {
  const { path } = useRouteMatch();
  const { currentDeck, setCurrentDeck } = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    async function readCurrentDeck() {
      try {
        const response = readDeck(deckId);
        const deck = await response;
        setCurrentDeck(deck);
      } catch (error) {
        console.log(error);
      }
    }
    readCurrentDeck();
    console.log(currentDeck)
  }, []);

  return (
    <>
      <Switch>
        <Route path={`/decks/new`}>
          <NewDeck />
        </Route>
        <Route path={`${path}`}>
          <ViewDeck deck={currentDeck} />
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
