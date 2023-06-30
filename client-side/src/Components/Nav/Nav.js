import React, { useState, useEffect } from "react";
import "./Nav.css";
import $ from "jquery";

let loading = false;

function OpenMegaMenu() {
    let menu = $("#menu");
    let navbar = $('#navigation');
    console.log(menu);
  if (menu.css("height") === "100px") {
 
    menu.css("height", "0");

    setTimeout(function() {
      navbar.css('border-bottom-right-radius','15px');
      navbar.css('border-bottom-left-radius','15px');
    }, 400);

  } else {
    navbar.css('border-bottom-right-radius','0');
    navbar.css('border-bottom-left-radius','0');
    setTimeout(function() {
      menu.css("height", "100px");
    }, 400);
  }
}

const Nav = (props) => {

  return (
    <div>
      <nav id="navigation" className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/*Logo?
           <button className="navbar-brand" href="#">
            Navbar
          </button> */}
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
          <div className="d-flex flex-row-reverse fa-lg">
            {/* <FontAwesomeIcon icon="check-square" /> */}
            <button onClick={props.OpenModal} className="navbar-brand"><i class="fa-solid fa-user-gear"></i></button>
            <button className="navbar-brand"><i class="fa-solid fa-user"></i></button>
          </div>
        </div>
      </nav>
      <div id="menu" className="mega-menu">
        <div className="row">
          <div className="col-4 menu-column">
            <button>test </button>
          </div>
          <div className="col-4 menu-column">
            <button>test </button>
          </div>
          <div className="col-4 menu-column d-flex justify-content-center">
            <div className="link-group">
              <button className="navbar-brand">test </button>
              <button className="navbar-brand">test </button>
              <button className="navbar-brand">test </button>
              <button className="navbar-brand">test </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
