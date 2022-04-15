import React from "react";


//this componetent was made to be shared between creating and editing decks
function DeckForm({ formData, handleSubmit, handleChange, handleCancel }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label mt-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Deck Name"
          className="form-control"
        />
        <label htmlFor="description" className="form-label mt-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          rows="4"
          placeholder="Brief description of the deck"
          className="form-control"
        />
        <button
          className="btn btn-secondary mt-3 mr-1"
          type="reset"
          onClick={() => handleCancel()}
        >
          {" "}
          Cancel{" "}
        </button>
        <button className="btn btn-primary mt-3 ml-1" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default DeckForm;
