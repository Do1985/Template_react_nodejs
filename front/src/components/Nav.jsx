import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/profil">
            profil
          </NavLink>
        </li>
        <li>
          <NavLink to="/addArticle">
            add Article
          </NavLink>
        </li>
        <li>
          <NavLink to="/addUser">
            add User
          </NavLink>
        </li>
        <li>
          <NavLink to="/testme">
            TEST
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;