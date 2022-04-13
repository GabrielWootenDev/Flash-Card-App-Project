import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck } from "../utils/api";

//add next button and card change handler

function Study() {
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const { deckId } = useParams();
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const [cardsLength, setCardsLength] = useState(0);

  useEffect(() => {
    async function loadDecks() {
      try {
        const response = readDeck(deckId);
        const deckFromAPI = await response;
        setDeck(deckFromAPI)
        setCards(deckFromAPI.cards);
        setCardsLength(deckFromAPI.cards.length);
      } catch (error) {
        console.log("Load deck error: ", error);
      }
    }
    loadDecks();
  }, [deckId]);

  //   flip button
  const flipButtonHandler = (event) => {
    if (cardFront === true) {
      setCardFront(false);
    } else {
      setCardFront(true);
    }
  };

  //next button
  const nextButtonHandler = (event) => {
    setCardIndex(cardIndex + 1);
    console.log(cardsLength, cardIndex);
    if (cardIndex === cardsLength - 1) {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page."
        )
      ) {
        setCardIndex(0);
        setCardFront(true);
      } else {
        history.push("/");
      }
    } else {
      setCardIndex(cardIndex + 1);
      setCardFront(true);
    }
  };

  if (cards.length < 3) {
    return (
      <div>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home" /> Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
        <h1>Study: {deck.name}</h1>
        <p />
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study.</p>

        <Link to={`/decks/${deck.id}/cards/new`}>
          <button type="button" class="btn btn-primary">
            Add Cards
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <div className="mt-2 mb-3">
          <h2>Study: {deck.name}</h2>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Card {cardIndex + 1} of {cardsLength}
              </h4>
              <div>
                {cardFront ? (
                  <p className="card-text">{cards[cardIndex].front}</p>
                ) : (
                  <p className="card-text">{cards[cardIndex].back}</p>
                )}
              </div>
              <button className="btn btn-secondary" onClick={flipButtonHandler}>
                Flip
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
}

export default Study;
