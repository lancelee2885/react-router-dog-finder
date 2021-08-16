import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Nav: navbar for each page
 *  
 *  Props:
 *  - dogNames: array of all dog names
 */

function Nav({ dogNames }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs">
        All Dogs
      </NavLink>
      {dogNames.map(name =>
        <NavLink exact to={`/dogs/${name.toLowerCase()}`}>
         {name}
        </NavLink>)}
    </nav>
  );
}


export default Nav;