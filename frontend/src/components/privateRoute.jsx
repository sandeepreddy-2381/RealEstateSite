import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    const renderComponent = props => (
        isAuthenticated && !loading ? <Component {...props} /> : <Navigate to="/login" />
    );

    return <Route {...rest} render={renderComponent} />;
};



PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);

