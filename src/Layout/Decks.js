import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import ViewDeck from "../Decks/ViewDeck";
import { readDeck } from "../utils/api";

function Decks() {
  const { path } = useRouteMatch();
  const { deck, setDeck } = useState({});
  const { deckId } = useParams();


  // this code below should work yet no metter what I try I always get a Type error that setDeck is not a function.
  useEffect(() => {
    async function readCurrentDeck() {
      if (deckId === "new") return;
      try {
        const response = await readDeck(deckId);
        console.log(response);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }
    }
    readCurrentDeck();
  }, []);

  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <ViewDeck deck={deck} />
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
