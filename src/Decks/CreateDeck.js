import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck, readDeck } from "../utils/api";

function CreateDeck() {
  const history = useHistory();
  const initialFormState = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    const response = await createDeck(formData);
    await readDeck(response.id);
    history.push(`/decks/${response.id}`)
}

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h2>Create Deck</h2>
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
          <input className="btn btn-secondary mt-3 mr-1" type="reset" value="Cancel" onClick={() => history.push("/")}></input>
          <input className="btn btn-primary mt-3 ml-1" type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}

export default CreateDeck;
