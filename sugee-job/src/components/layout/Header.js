import React from "react";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid my-2">
          <a class="navbar-brand px-4" href="#">
            <img src={require("../../assets/sugee-logo.png")}  width="130" height="32" class="d-inline-block align-text-top"></img>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-uppercase" aria-current="page" href="#">
                  Jobseeker
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase" aria-current="page" href="#">
                  Employer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-uppercase" aria-current="page" href="#">
                  Browse Jobs
                </a>
              </li>
            </ul>
            <div class="d-flex px-5" role="search">
              <button class="btn btn-light mx-3" type="submit">
                Register
              </button>
              <button class="btn btn-success text-uppercase" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
