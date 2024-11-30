import React, { useState } from "react";
import "../assets/css/home.css";
import "../assets/css/main.css";
import "../assets/css/style.css";
import TopLogo from "../assets/icons/1/ticket.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bh_header_wrapper">
        <div className="container">
          <div className="bh_flex_menu" id="header">
            {/* Logo Section */}
            <div
              className="bh_logo"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={TopLogo} alt="Logo" style={{ height: "40px" }} />
              &nbsp;
              <p className="logo_heading">Event Sphere</p>
            </div>

            {/* Navigation Menu */}
            <nav className={`bh_menu ${isMenuOpen ? "menu_open" : ""}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/expo-center">Expo Centers</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link className="dropdown-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/attend">
                        Attend
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/host">
                        Host
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/activities">
                        Activities
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <div className="btn_login">
                  <Link to="/login">Login</Link>
                </div>
              </ul>
            </nav>

            {/* Hamburger Toggle Button */}
            <div className="bh_toggle" id="tog_btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
