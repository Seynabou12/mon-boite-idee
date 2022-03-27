
import './style/style.css';
import React, {useState} from 'react';
import axios from "axios";
  
    const Carte = ({idee}) => {
        console.log(idee);
        const [status, setStatus] = useState(idee.status);
    
        const change_status = () => {
            axios.put(`https://seynabou-boite-idee.herokuapp.com/api/ideas/status/${idee.id}`)
            .then( (response) => setStatus(response.data.status))
        }
        
    return (
        
        <div className="col-4 carte" >
            
            <div className="card card-idea m-2" >
            
                <div className=" flex-column d-flex justify-content-between">
                    <div className='tete'>
                    <div className='card-header text-center'>
                        <h4>Card Idee</h4>
                    </div>
                    </div>
                    <div className="card-block-titre text-center card-body">
                        <h5 className="card-title fw-bold">{idee.Titre}</h5>
                        <p className="card-text">
                        {idee.Suggestion}
                        </p>
                    </div>
                    <div className='card-footer text-center'>
                        <h6 className="card-subtitle mb-2 text-gris ">
                            {status ? "approuvée" : "réfusée"}
                        </h6>
                    </div>  
                    <div className="d-flex justify-content-between">
                        <i className="bi bi-check-circle text-success card-link btn" style={{fontSize: "2rem" }} id={"approuve"} onClick={change_status}></i>
                        <i className="bi bi-x-circle card-link btn" style={{fontSize: "2rem", color: "#ce0033"}} id={"refuse"} onClick={change_status}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carte;