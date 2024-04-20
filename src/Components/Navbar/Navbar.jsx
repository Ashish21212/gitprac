import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div
          className="burgerIcon"
          onClick={() => {
            console.log(document.querySelector(".burgerMenu").classList);
            document.querySelector(".burgerMenu").classList.toggle("show");
            document.querySelector(".burgerIcon").classList.toggle("change");
          }}
        >
          <div className="bar1 bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar3 bar"></div>
        </div>
        <div className="burgerMenu">
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <button className="btn black">Log in</button>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            <button className="btn white">Sign up</button>
          </NavLink>
          <ul className="menuItem">
            <NavLink to="/business" style={{ textDecoration: "none" }}>
              <li className="item">Create a business account</li>
            </NavLink>
            <NavLink to="/weddingServices" style={{ textDecoration: "none" }}>
              <li className="item">Wedding Services</li>
            </NavLink>
            <NavLink to="/venues" style={{ textDecoration: "none" }}>
              <li className="item">Available venues</li>
            </NavLink>
            <NavLink to="/eventManager" style={{ textDecoration: "none" }}>
              <li className="item">Plan a event</li>
            </NavLink>
          </ul>
          <footer className="burgerMenuFooter">
            <li className="item">Follow Us:</li>
            <ul className="socialHandles">
              <li className="handles">
                <a href="www.facebook.com">
                  <img src="../Image/facebook.png" alt="Social Media Handle" />
                </a>
              </li>
              <li className="handles">
                <a href="instagram.com">
                  <img src="../Image/instagram.png" alt="Social Media Handle" />
                </a>
              </li>
              <li className="handles">
                <a href="twitter.com">
                  <img src="../Image/twitter.png" alt="Social Media Handle" />
                </a>
              </li>
              <li className="handles">
                <a href="youtube.com">
                  <img src="../Image/youtube.png" alt="Social Media Handle" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
        <div className="nav_menu">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "1.6rem",
              color: "#b800fb",
            }}
          >
            <h2>
              KHAN<span className="pin">PIN</span>
            </h2>
          </NavLink>
        </div>
        <div className="login_signup">
          <NavLink to="/login">
            <button>Log in</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Sign up</button>
          </NavLink>
        </div>
        <div className="nav_logo"></div>
        <div className="nav_menu">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "1.6rem",
              color: "#1E0342",
            }}
          >
            <h2>
              KHAN<span className="pin">PIN</span>
            </h2>
          </NavLink>
        </div>
        <div className="login_signup">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Signup</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
