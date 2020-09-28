import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const { auth } = props;
  if (auth) return <Route {...props} />;
  else if (auth === false || {}) return <Navigate to="/" />;
  else return null;
};

export default connect((state) => ({
  auth: state.auth,
}))(PrivateRoute);

PrivateRoute.propTypes = {
  auth: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  auth: false,
};
