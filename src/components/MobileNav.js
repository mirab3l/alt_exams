import React from "react";
import { Link } from "react-router-dom";
import "./Styling/Nav.css";

const MobileNav = () => {
  return (
    <div className="mobileHeader">
      <ul className="mobileNavLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Repos">Repositories</Link>
        </li>
        <li>
          <Link to="*">Error</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
