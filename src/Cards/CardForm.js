import React from "react";
import { useHistory } from "react-router-dom";

//this componetent was made to be shared between creating and editing decks
function CardForm({
  formData,
  handleSubmit,
  handleChange,
  path,
  newCardPath,
  deckId,
}) {
  const history = useHistory();
  return (
    <>
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
        {path === newCardPath ? (
          <input
            className="btn btn-secondary mt-3 mr-1"
            type="reset"
            value="Done"
            onClick={() => history.push(`/decks/${deckId}`)}
          ></input>
        ) : (
          <input
            className="btn btn-secondary mt-3 mr-1"
            type="reset"
            value="Cancel"
            onClick={() => history.push(`/decks/${deckId}`)}
          ></input>
        )}
        <input
          className="btn btn-primary mt-3 ml-1"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </>
  );
}

export default CardForm;
