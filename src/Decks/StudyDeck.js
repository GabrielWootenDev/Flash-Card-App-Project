import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StudyCards from "../Cards/StudyCards";
import NotEnoughCards from "../Cards/NotEnoughCards";


function StudyDeck({ deck, cards }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const history = useHistory();


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
    if (cardIndex === cards.length - 1) {
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

  //renders either our StudyCards component or NotEnoughCards if we have les than 3 cards in a deck.
  //StudyCards has many props from the StudyDeck component in order to keep our pages and nested components in better sync and solve a few performance issues.
  return (
    <>
      {deck && cards.length >= 3 ? (
        <StudyCards
          deck={deck}
          cards={cards}
          cardIndex={cardIndex}
          cardFront={cardFront}
          flipButtonHandler={flipButtonHandler}
          nextButtonHandler={nextButtonHandler}
        />
      ) : (
        <NotEnoughCards deck={deck} />
      )}
    </>
  );
}

export default StudyDeck;
