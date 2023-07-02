import React from "react";

import $ from "jquery";

import "./ModalNavigation.scss";

const ModalNavigation = () => {

    const ChangeMenu = (type) => {

        // $('.activeTab').addClass('remove');
        $('.activeTab').fadeOut().removeClass('activeTab').fadeIn();

        $('#admin-menu-'+type+'-button').addClass('activeTab');
    }

    return (
      <header className="header background-color" role="banner">
        <h1 className="logo">
            Admin <span>MENU</span>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li>
                <button id="admin-menu-home-button" onClick={() => ChangeMenu('home')} className="activeTab">Home</button>
              </li>
              <li>
                <button id="admin-menu-navigation-button" onClick={() => ChangeMenu('navigation')} >Navigation</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
              <li>
                <button >Blog</button>
              </li>
            </ul>
          </nav>
          {/* <ul className="social-links list-inline unstyled list-hover-slide">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Google+</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">CodePen</a>
            </li>
          </ul> */}
        </div>
      </header>
    );
}

export default ModalNavigation;