
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
                    <div className='card-header   text-center'>
                        <h5 className="card-title fw-bold">{idee.Titre}</h5>
                    </div>
                    </div>
                    <div className="card-block-titre text-center card-body">
                        
                        <p className="card-text">
                        {idee.Suggestion}
                        </p>
                    </div>
                    <div className='card-footer text-center'>
                        <div className="d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-success" style={{fontSize: "1rem" }} id={"approuve"} onClick={change_status}>Approuver</button>
                        <button type="button" class="btn btn-outline-danger" style={{fontSize: "1rem" }} id={"refuse"} onClick={change_status}>Refuser</button>
                            {/* <button className="btn btn-gray text-success card-link btn" >Approuver</button>
                            <button className="btn btn-danger card-link btn" >Refuser</button> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Carte;