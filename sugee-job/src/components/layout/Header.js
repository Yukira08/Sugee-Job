import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sugee-logo.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={require("../../assets/sugee-logo.png")}
            width="130"
            height="32"
            class="d-inline-block align-text-top"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link> */}
            <Link
              to="/jobseeker"
              class="nav-link text-uppercase"
              aria-current="page"
              d
            >
              Jobseeker
            </Link>
            {/* </Nav.Link> */}
            <Link
              to="/employer"
              class="nav-link text-uppercase"
              aria-current="page"
            >
              Employer
            </Link>
            <Link
              to="/browsejobs"
              class="nav-link text-uppercase"
              aria-current="page"
              href="#"
            >
              Browse Jobs
            </Link>
            <div class="px-5">
              <button class="btn btn-light mx-3" type="submit">
                Register
              </button>
              <button class="btn btn-success text-uppercase" type="submit">
                Login
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Fragment>
    //   <nav class="navbar navbar-expand-lg bg-light">
    //     <div class="container-fluid my-2">
    //       <a class="navbar-brand px-4" href="#">
    //         <img
    //           src={require("../../assets/sugee-logo.png")}
    //           width="130"
    //           height="32"
    //           class="d-inline-block align-text-top"
    //         ></img>
    //       </a>
    //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <Menu />
    //         <div class="d-flex px-5" role="search">
    //           <button class="btn btn-light mx-3" type="submit">
    //             Register
    //           </button>
    //           <button class="btn btn-success text-uppercase" type="submit">
    //             Login
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </Fragment>
  );
};

export default Header;
