import {Fragment} from 'react';
import {NavLink} from "react-router-dom"


const Auteurs = () => {
    return (
    
    <Fragment>
    
    
    <h1> Auteurs contexte de l'oeuvre de Pic </h1>


                    <div class="liens_auteurs">
                     <NavLink to="/Auteurs/Proclus">
                    <img src="../img/Proclus.png" alt="Proclus" width="163" height="163"/>
                    </NavLink>
                    <div> </div>
    <NavLink to="/Auteurs/Plotin">
                    <img src={"../img/Plotin.jpeg"} alt="Plotin" width="163" height="163"/>
                    </NavLink>
                    </div>
    </Fragment>

);
}

export default Auteurs


