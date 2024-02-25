import React, { Fragment } from "react";
import { Link, NavLink, useHref } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "../actions/alert";
import PropTypes from "prop-types";

const NavBars = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a className="navbar__top__auth__link" onClick={logout} href="#!">
      Logout
    </a>
  );

  const guestLinks = (
    <Fragment>
      <Link className="navbar__top__auth__link" to="/login">
        Login
      </Link>
      <Link className="navbar__top__auth__link" to="/signup">
        signup
      </Link>
    </Fragment>
  );
  console.log(isAuthenticated)
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link className="navbar__top__auth__link" to="/">
              Real Estate
            </Link>
            '
          </div>
          <div className="navbar__top__auth">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
        <div className="navbar__bottom">
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" to="/listings">
              Listings
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </nav>
      <Alert />
    </Fragment>
  );
};

NavBars.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavBars);
