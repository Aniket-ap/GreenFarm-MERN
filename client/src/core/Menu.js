import React, { Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import "../styles.css";

import Logo from "../images/logo1.png";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#000" };
  }
};

const Menu = ({ history }) => {
  return (
    <div className="navbar-head">
      <nav className="navbar-new">
        <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
          <i className="fa fa-bars"></i>
        </label>
        <Link style={isActive(history, "/")} to="/">
          <img className="logo-nav" src={Logo} alt="logo" />
        </Link>

        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link className="nav-links" style={isActive(history, "/")} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className="nav-links"
              style={isActive(history, "/shop")}
              to="/shop"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              className="nav-links"
              style={isActive(history, "/cart")}
              to="/cart"
            >
              Cart{" "}
              <sup>
                <small className="cart-badge">{itemTotal()}</small>
              </sup>
            </Link>
          </li>

          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li>
              <Link
                className="nav-links"
                style={isActive(history, "/user/dashboard")}
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li>
              <Link
                className="nav-links"
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          {!isAuthenticated() && (
            <Fragment>
              <li>
                <Link
                  className="nav-links"
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  Signin
                </Link>
              </li>

              <li>
                <Link
                  className="nav-links"
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <li>
              <span
                className="nav-links"
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Signout
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Menu);
