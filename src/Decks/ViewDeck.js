import React from "react";
import { useParams } from "react-router-dom";


function ViewDeck({deck}) {
  const { deckId } = useParams();




  return (
    <>
      <div>
        <p>Home / </p>
      </div>

      <p>This is deck {deckId}</p>
    </>
  );
}

export default ViewDeck;
