import React, { useState, useEffect } from "react";

import "./Nav.css";

import $ from "jquery";


function OpenMegaMenu() {
    let menu = $("#menu");

    console.log(menu);
  if (menu.css("height") == "100px") menu.css("height", "0");
  else menu.css("height", "100px");
}

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-brand" href="#">
            Navbar
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link navbar-brand"
                  aria-current="page"
                  href="#"
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link navbar-brand" href="#">
                  Features
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={OpenMegaMenu}
                  className="nav-link navbar-brand"
                  href="#"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="menu" className="mega-menu"></div>
    </div>
  );
}

export default Nav;
