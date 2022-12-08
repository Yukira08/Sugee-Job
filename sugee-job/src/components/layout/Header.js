import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sugee-logo.png";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = () => {
  return (
    <>
      <p>
        <Link
          to="/jobseeker"
          class="nav-link text-uppercase"
          aria-current="page"
        >
          Jobseeker
        </Link>
      </p>
      <p>
        <Link
          to="/employer"
          class="nav-link text-uppercase"
          aria-current="page"
        >
          Employer
        </Link>
      </p>
      <p>
        <Link
          to="/browsejobs"
          class="nav-link text-uppercase"
          aria-current="page"
          href="#"
        >
          Browse Jobs
        </Link>
      </p>
    </>
  );
};

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid my-2">
          <a class="navbar-brand px-4" href="#">
            <img
              src={require("../../assets/sugee-logo.png")}
              width="130"
              height="32"
              class="d-inline-block align-text-top"
            ></img>
          </a>
          <div class="nav-links-container" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <Menu />
            </ul>
          </div>
          <div class="nav-buttons-container d-flex px-5" role="search">
            <button class="btn btn-light mx-3" type="submit">
              Register
            </button>
            <button class="btn btn-success text-uppercase" type="submit">
              Login
            </button>
          </div>
          <div class="navbar-menu">
            {toggleMenu ? (
              <FiX size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <FiMenu size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div class="navbar-menu-container scale-up-center">
                <div className="navbar-links-container">
                  <Menu />
                </div>
                <div className="navbar-button-container">
                  <button class="btn btn-light mx-3" type="submit">
                    Register
                  </button>
                  <button class="btn btn-success text-uppercase" type="submit">
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
