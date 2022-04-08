import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "../Decks/CreateDeck";
import Decks from "./Decks";
import { listDecks } from "../utils/api";

function Layout() {

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
    loadDecks()
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>
          <Route>
            <CreateDeck path="/decks/new" />
          </Route>
          <Route path="/decks/:deckId">
            <Decks />
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
