import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../Decks/CreateDeck";
import CreateDeckButton from "../Decks/CreateDeckButton";
import DeckList from "../Decks/DeckList";
import ViewDeck from "../Decks/ViewDeck";
import StudyDeck from "../Decks/StudyDeck";
import { deleteDeck, listDecks } from "../utils/api";

//to do study pages, card edit, deck edit, button functions
function Layout() {
  const history = useHistory();
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

  const deleteDeckHandler = (deckIdToDelete) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckIdToDelete);
      history.push("/");
      history.go(0);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <CreateDeckButton />
            <DeckList decks={decks} deleteDeckHandler={deleteDeckHandler} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/">
            <ViewDeck deleteDeckHandler={deleteDeckHandler} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
