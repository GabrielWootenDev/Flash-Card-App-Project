import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard, readDeck, readCard } from "../utils/api";

//renders a form to edit a card using the cardId params of the parent component.

function EditCard({deck}) {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    async function loadCard() {
      const response = await readCard(cardId);
      const cardFromAPI = await response;
      setCard(cardFromAPI);
    }

    loadCard();
  }, [cardId]);

  //initialFormState will fill in the values of our form to be the same as what they are on the existing card.
  //there was an error in the api index.js so I added parseFloat in the deckId value to correct it.

  const initialFormState = {
    front: card.front,
    back: card.back,
    deckId: parseFloat(deckId),
    id: cardId,
  };

  useEffect(() => {
      setFormData({...initialFormState})
  }, [card]);

  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateCard(formData);
    await readDeck(deckId);
    history.push(`/decks/${response.id}`);
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
              <li className="breadcrumb-item active" aria-current="page">
                Edit Card {cardId}
              </li>
            </ol>
          </nav>
          <div>
            <h4>Edit Card</h4>
            <form onSubmit={handleSubmit}>
              <label htmlFor="front" className="form-label mt-2">
                Front
              </label>
              <textarea
                id="front"
                name="front"
                onChange={handleChange}
                value={formData.front}
                rows="2"
                placeholder="Front side of card"
                className="form-control"
              />
              <label htmlFor="back" className="form-label mt-2">
                Back
              </label>
              <textarea
                id="back"
                name="back"
                onChange={handleChange}
                value={formData.back}
                rows="2"
                placeholder="Back side of card"
                className="form-control"
              />
              <input
                className="btn btn-secondary mt-3 mr-1"
                type="reset"
                value="Cancel"
                onClick={() => history.push(`/decks/${deckId}`)}
              ></input>
              <input
                className="btn btn-primary mt-3 ml-1"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default EditCard;
