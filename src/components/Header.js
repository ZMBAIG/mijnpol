import React from "react";
import logo from "./images/Politie-logo-269952DA5A-seeklogo.com.png";
function Header(props) {
  return (
    <header>
      <nav class="navigation">
        <div className="nav-left">
          <a href="/">Home</a>
          <a href="/">Meldingen</a>
          <a href="https://www.nu.nl/" target="__blank">
            Nieuws
          </a>
        </div>
        <div className="nav-logo">
          <img id="politie-logo" alt="pic" src={logo} />
        </div>
        <div className="nav-right">
          <a href="/">Vermist</a>
          <a href="/">Gezocht</a>
          <a href="/">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">
              Onderwerpen<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/">Link One</a>
              <a href="/">Link Two</a>
              <a href="/">Link Three</a> <a href="/">Link Four</a>
              <a href="/">Link Five</a>
            </div>{" "}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
