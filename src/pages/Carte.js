
import './style/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Carte = () => {
  

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
                        <h5 className="card-title fw-bold"> Titre </h5>
                        <p className="card-text">
                            Suggestion
                        </p>
                    </div>
                    <div className='card-footer text-center'>
                        <h6 className="card-subtitle mb-2 text-gris ">
                            Approuver / Refuser
                        </h6>
                    </div>  
                    <div className="d-flex justify-content-between">
                        <i className="bi bi-check-circle text-success card-link btn" style={{fontSize: "2rem" }}  ></i>
                        <i className="bi bi-x-circle card-link btn" style={{fontSize: "2rem", color: "#ce0033"}} ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carte;
