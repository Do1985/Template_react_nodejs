import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'

const Nav = (props) => {
  
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    if (!axios.defaults.headers.common["Authorization"] && jwtToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
    }
  }, [])
  return (
    <nav>
      <ul class="ulpremier">
        <li>
          <NavLink to="/">
            Accueil
          </NavLink>
        </li>
         <li>
          <NavLink to="/Formu">
            Newsletter et Alertes
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
           Créer un compte
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
           Se connecter
          </NavLink>
        </li>  
    {/*    <li>
          <NavLink to="/logout">
           Deconnexion
          </NavLink>
        </li>  */}
        </ul>
        
        <ul class="uldeuxieme">
       
     {/*   <li>
          <NavLink to="/AddProduct">
           Ajout d'un livre
          </NavLink>
        </li>*/}
        <li>
          <NavLink to="/Users">
           Les Profils
          </NavLink>
        </li>
        <li>
          <NavLink to="/AllProducts">
            Les livres
          </NavLink>
        </li>
     {/*    <li>
          <NavLink to="/AddArticle">
            Ajout Article
          </NavLink>
        </li>*/}
            <li>
          <NavLink to="/AllArticles">
            Les Articles
          </NavLink>
        </li>
            <li>
          <NavLink to="/Pico">
            Pico
          </NavLink>
        </li>
          <li>
          <NavLink to="/Auteurs">
            Auteurs
          </NavLink>
        </li>
  {/*         <li>
          <NavLink to="/Proclus">
            Proclus
          </NavLink>
        </li>
           <li>
          <NavLink to="/Plotin">
            Plotin
          </NavLink>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Nav;