import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { signup } from "../actions/auth";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";

const Signup = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setAlert("Password does not matches ", "error");
    } else {
      signup(name,email,password1,password2);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>Real-Estate - SignUp</title>
        <meta name="description" content="Sign Up" />
      </Helmet>
      <h1 className="auth__title">Sign Up</h1>
      <p className="auth__lead">Create Your Account</p>
      <form className="auth__form" onSubmit={onSubmit}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="enter Password again"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <button className="auth__form__button">Register</button>
      </form>
      <p className="auth__authtext">
        Already Have an account ?{" "}
        <Link className="auth__authtext__link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

Signup.propTypes = {
    signup : PropTypes.func.isRequired,
    setAlert :PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool,
}
const mapStateToProps = state =>({
    isAuthenticated :state.auth.isAuthenticated
});

export default connect(mapStateToProps,{signup,setAlert})(Signup);
