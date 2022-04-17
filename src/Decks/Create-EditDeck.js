import React, { useState, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { updateDeck, readDeck, createDeck } from "../utils/api";
import DeckForm from "./DeckForm";


//initialformstate helps control our forms before inputs

function CreateEditDeck({ deck }) {
  const { path } = useRouteMatch();
  const newDeckPath = "/decks/new";
  const history = useHistory();
  const initialFormState = { name: "", description: "" };
  const [formData, setFormData] = useState(initialFormState);

  // this useEffect will set our form data to the existing decks data if there is one (from edit deck)
  useEffect(() => {
    if (deck) {
      setFormData(() => ({
        name: deck.name,
        description: deck.description,
        cards: deck.cards,
        id: deck.id,
      }));
    }
  }, [deck]);
  //when anything is input into either field the value is stored in formData state and that input value changes to the same as the form with the based on the target key.
  const handleChange = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  //on submit this will either update our exisiting deck or create a new one after looking at our path to determine what page we rendered from then render the page of the deck we created/edited with useHistory,

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    path === newDeckPath
      ? (response = await createDeck(formData))
      : (response = await updateDeck(formData));
    await readDeck(response.id);
    history.push(`/decks/${response.id}`);
    history.go(0);
  };

  const handleCancel = (event) => {
    path === newDeckPath ? history.push("/") : history.push(`/decks/${deck.id}`);
  };

  // our return below has a some lines of inline logic to determine what text is rendered on the screen based on our path and then our DeckForm is rendered.
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {path === newDeckPath ? (
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          )}
        </ol>
      </nav>
      <div>
        {path === newDeckPath ? <h2>Create Deck</h2> : <h2>Edit Deck</h2>}
        <DeckForm
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCancel={handleCancel}
        />
      </div>
    </>
  );
}

export default CreateEditDeck;
