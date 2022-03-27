import axios from 'axios';
import React from 'react';
import { useState } from "react";


const Form = () => {

  const lenghtMax = 150;
  console.log(lenghtMax);
  const [contenuSaisi, textSaisi] = useState("");
  const [reste, Reste] = useState(lenghtMax);
  const [titre, Titre] = useState("");

  const handleInputSuggestion = (e) => {
    textSaisi(e.target.value);
    Reste(lenghtMax - contenuSaisi.length);
  }

  const handleChangeTitre = (e) => {
    Titre(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://seynabou-boite-idee.herokuapp.com/api/ideas", {
      "Titre": titre,
      "Suggestion": contenuSaisi,
    }).then((response) => {
      // console.log(response);
    }).catch((error) => {
      // console.log(error);
    });

    console.log(titre);
    console.log(contenuSaisi);

  }
  return (
    <div className='container row'>

      <form className='col mt-5'>

        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input
            id='titre'
            onChange={handleChangeTitre}
            type="text"
            className="form-control"
            name="titre"
            placeholder="Ex : Brief......"
            aria-describedby="titreHelp" />
          <div className="form-text">
            Merci de mettre un Titre plus Clair pour la Catégorisation
          </div>
        </div>
        <div className="mb-3">
          <label htmlForm="suggestion" className="form-label">
            Suggestion</label>
          <textarea
            onChange={handleInputSuggestion}
            className="form-control"
            id="suggestion"
            name="suggestion"
            rows="3"></textarea>
          <p className='textSaisi'> Contenu saisi {contenuSaisi.length} / 150</p>
          <p id="text-restant">Il vous reste {reste}</p>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          id="btn-suggestion"
          className="btn btn-danger float-end">
          Envoyer
        </button>

      </form>
      <div className='col d-flex'>
        <img src='/fille.png' className='img-fluid'></img>
      </div>
    </div>

  );
}

export default Form;
