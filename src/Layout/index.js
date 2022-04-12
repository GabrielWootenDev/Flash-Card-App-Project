import React  from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "../Decks/CreateDeck";
import Decks from "./Decks";
import { deleteDeck } from "../utils/api";


//to do study pages, card edit, deck edit, button functions
function Layout() {
  const history = useHistory();


  const deleteDeckHandler = (deckIdToDelete) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckIdToDelete);
      history.go(0);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home deleteDeckHandler={deleteDeckHandler} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Decks deleteDeckHandler={deleteDeckHandler} />
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
