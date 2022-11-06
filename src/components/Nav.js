import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import "./Styling/Nav.css";

const Nav = () => {
  const [isNavbar, setnavbar] = useState(false);
  const handleClose = () => {
    setnavbar(!isNavbar);
  };

  return (
    <div>
      <nav>
        <div className="menu" onClick={handleClose}>
          <img src="/Hamburger.svg" alt="hamburger" />
        </div>
        <div className="navLinksContainer">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="repos">Repositories</Link>
            </li>
            <li>
              <Link to="Profile">Profile</Link>
            </li>
            <li>
              <Link to="*">Error</Link>
            </li>
          </ul>
        </div>
      </nav>
      {isNavbar ? <MobileNav /> : <></>}
    </div>
  );
};
export default Nav;
