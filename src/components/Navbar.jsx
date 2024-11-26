import React from "react";
import "../assets/css/home.css";
import "../assets/css/main.css";
import "../assets/css/style.css";
import TopLogo from '../assets/icons/1/ticket.svg'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
     <header className="bh_header_wrapper" >
          {/* <div className="bh_head_overlay"></div> */}
          <div className="container">
            <div className="bh_flex_menu" id="header">
              <div
                className="bh_logo"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={TopLogo}
                  alt="Logo"
                  style={{ height: "40px" }} // Optional
                />&nbsp;
                <h2
                  className="logo_heading"
                  style={{ marginTop: "0px", fontWeight: "500" }}
                >
                  Event Sphere
                </h2>
              </div>

              {/* Navigation Menu */}
              <nav className="bh_menu">
                <ul>
                  <li>
                    <Link  to={"/"} >Home</Link >
                  </li>
                  <li>
                  <Link  to={"/events"} >Events</Link>
                  </li>
                  <li>
                  <Link  to={"/expo-center"} >Expo Centers</Link>
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
                      <li><Link className="dropdown-item" to={'/about'}>About</Link></li>
                      <li><Link className="dropdown-item" to={'/attend'}>Attend</Link></li>
                      <li><Link className="dropdown-item" to={'/host'}>Host</Link></li>
                      <li><Link className="dropdown-item" to={'/activities'}>Activities</Link></li>
                      <li><Link className="dropdown-item" to={'/contact'}>Contact Us</Link></li>
                    </ul>
                  </li>
                </ul>

                <div className="btn_login  ">
                  <Link href="/login">Login</Link>
                </div>

                <div className="bh_toggle" id="tog_btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </nav>
            </div>
          </div>
        </header>
      
    </>
  );
}

export default Navbar;
