import React from "react";
import Logo from './logo.gif';

const Header = ({ title }) => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            style={{maxHeight: 'auto !important'}}
            src={Logo}
          />
          <h1 class="title is-4">{title}</h1>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item">Contact</a>
        </div>

        {/* <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
