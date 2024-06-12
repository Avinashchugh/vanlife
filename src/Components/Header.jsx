import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;VANLIFE&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;VANLIFE&nbsp;</span>
        </button>
      </Link>
      <nav>
        <NavLink to="/host" className="button1" style={{margin: "20px" }}>Host</NavLink>
        <NavLink to="/about" className="button1" style={{margin: "20px"}}>About</NavLink>
        <NavLink to="/vans" className={"button1"} style={{margin: "20px"}}>Vans</NavLink>
      </nav>
    </header>
  );
};

export default Header;
