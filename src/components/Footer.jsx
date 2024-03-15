import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaTwitter,
  FaFacebookSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <footer className="row py-5 mt-5">
            <div className="col-md-3 mb-3">
              <Link
                to="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <img src="assets/footer-logo.png" className="footer-logo" alt="logo" />
              </Link>
            </div>

            <div className="col-md-2 mb-3">
              <h5 className="section-heading">SiteMap</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="footer-link p-0">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2 footer-link">
                  <Link to="/about" className="footer-link p-0">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2 footer-link">
                  <Link to="/menu" className="footer-link p-0">
                    Menu
                  </Link>
                </li>
                <li className="nav-item mb-2 footer-link">
                  <Link to="/reserve" className="footer-link p-0">
                    Reservations
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/order" className="footer-link p-0">
                    Order Online
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className="section-heading">Contact</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p className="nav-text p-0">
                    <FaMapMarkerAlt className="mx-1" /> 
                    Address: No 204 Los Angeles, New York
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p className="nav-text p-0">
                    <MdOutlineMail className="mx-1" /> 
                    Email: info@littlelemon.com
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <p className="nav-text p-0">
                    <FaPhone className="mx-1" />
                    Phone Number: +123 4567 8901
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="section-heading">Social Links</h5>
              <ul className="nav list-unstyled">
                <li className="ms-3">
                  <Link className="social-link" to="#">
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="social-link" to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="social-link" to="#">
                    <FaFacebookSquare />
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
