import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function CreateCard({deck}) {
  const history = useHistory();
  const {deckId} = useParams(); 
  const initialFormState = {
    front: "",
    back: "",
    deckId: deckId,
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  }
 //submitting our form will use the creatCard API function to create a new card in our current deck from our formData
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const response = await createCard(deckId, formData);
    await readDeck(deckId);
    history.go(0);
    history.push(`/decks/${response.id}`);
}

  return (
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
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h4>{deck.name}: Add Card</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="front" className="form-label mt-2">
            Front
          </label>
          <textarea
            id="front"
            name="front"
            onChange={handleChange}
            value={formData.description}
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
            value={formData.description}
            rows="2"
            placeholder="Back side of card"
            className="form-control"
          />
          <input className="btn btn-secondary mt-3 mr-1" type="reset" value="Done" onClick={() => history.push(`/decks/${deckId}`)}></input>
          <input className="btn btn-primary mt-3 ml-1" type="submit" value="Save"></input>
        </form>
      </div>
    </>
  );
}

export default CreateCard;
