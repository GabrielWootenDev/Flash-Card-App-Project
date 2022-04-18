import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { updateCard, readDeck, readCard, createCard } from "../utils/api";
import CardForm from "./CardForm";

//renders a form to edit a card using the cardId params of the parent component.

function CreateEditCard({ deck }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const newCardPath = "/decks/:deckId/cards/new";
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({});
  //initialFormState will fill in the values of our form to be the same as what they are on the existing card if a card route does not exist.
  const initialFormState = {
    front: "",
    back: "",
    deckId: deckId,
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    async function loadCard() {
      const response = await readCard(cardId);
      const cardFromAPI = await response;
      setCard(cardFromAPI);
    }
    if (cardId)
    loadCard();
  }, [cardId]);

  //there was an error in the api index.js so I added parseFloat in the deckId value to correct it.

  useEffect(() => {
    if (deck && path !== newCardPath)
    setFormData({
      front: card.front,
      back: card.back,
      deckId: parseFloat(deckId),
      id: cardId,
    });
  }, [card, cardId, deck, deckId, path]);

  

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  //submitting our form will use the creatCard API function or the editCard API function to create/edit a new card in our current deck from our formData
  const handleSubmit = async (event) => {
    event.preventDefault();
    path === newCardPath
      ? await createCard(deckId, formData)
      : await updateCard(formData);
    await readDeck(deckId);
    path === newCardPath
      ? history.go(0)
      : history.push(`/decks/${deckId}`);
    history.go(0);
  };

  return (
    <>
      {!card ? (
        <p>loading...</p>
      ) : (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
              </li>
              {path === newCardPath ? (
                <li className="breadcrumb-item active" aria-current="page">
                  Add Card
                </li>
              ) : (
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Card {cardId}
                </li>
              )}
            </ol>
          </nav>
          <div>
            {path === newCardPath ? (
              <h4>{deck.name}: Add Card</h4>
            ) : (
              <h4>Edit Card</h4>
            )}
            <CardForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} path={path} newCardPath={newCardPath} deckId={deckId}/>
          </div>
        </>
      )}
    </>
  );
}

export default CreateEditCard;
