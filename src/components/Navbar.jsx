import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-white rounded-0 sticky-top py-2 mt-3"
        aria-label="navbar"
      >
        <div className="container">
          <div className="col-md-1">
            <Link className="navbar-brand" to="/">
              <img src="assets/Logo.svg" className="logo" alt="logo" />
            </Link>
          </div>

          <button
            className="navbar-toggler collapsed nav-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse d-lg-flex collapse" id="navbar">
            <ul className="navbar-nav col-md-11 justify-content-lg-center">
              <li className="nav-item" key="home">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item" key="about">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item" key="menu">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item" key="reservations">
                <Link className="nav-link" to="/reserve">
                  Reservations
                </Link>
              </li>

              <li className="nav-item" key="orderOnline">
                <Link className="nav-link" to="/order">
                  Order Online
                </Link>
              </li>

              <li className="nav-item" key="login">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
