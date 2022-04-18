import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckButton from "../Decks/CreateDeckButton";
import DeckList from "../Decks/DeckList";
import Decks from "./Decks";
import CreateEditDeck from "../Decks/Create-EditDeck";


function Layout() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  //our decks array is loaded in and set to state once on the homepage before passing down into our components for further filtering and mapping.

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

  //when a delete deck button is pressed a confirmation window will appear and upon confirmation will remove the appropriate deckId from the API and return us to the home page, witha refresh to show the updated information.
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
            <CreateEditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Decks decks={decks} deleteDeckHandler={deleteDeckHandler} />
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
