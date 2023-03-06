import {Fragment} from 'react'
import Nav from './Nav.jsx'

const Header = () => {
    return (
        <Fragment>
     

 <div className="header">
                    <div className="Jo">
                      <img src="../img/pic1.jpeg" alt="Picdeprofil"></img> 
                      <h1>Johan Pico Della Mirandola</h1>
                    </div>
<nav role="navigation">
  <div id="menugeneral">
    
    <ul id="menu">
      <a href="#"><li>Pico, génie et précurseur</li></a>
      <a href="#"><li>Le Contexte historique</li></a>
      <a href="#"><li>Newsletter/ Alertes</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
</nav>
		        </div>

            {/*<Nav />*/}
        </Fragment>
    )
}

export default Header;