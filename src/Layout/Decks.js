import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import ViewDeck from "../Decks/ViewDeck";
import { readDeck } from "../utils/api";

function Decks({deleteDeckHandler}) {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function readCurrentDeck() {
      try {
        const response = await readDeck(deckId);
        setDeck(response);
      } catch (error) {
        console.log(error);
      }
    }
    
    readCurrentDeck();
  }, [deckId]);

  if (!deck) return <p>loading...</p>
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <ViewDeck deck={deck} deleteDeckHandler={deleteDeckHandler} />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </>
  );
}

export default Decks;
