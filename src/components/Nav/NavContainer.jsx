import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const NavContainer = ({ isAuth }) => {
  if (!isAuth) {
    return null;
  }
  return <Nav />;
};

export default connect(mapStateToProps)(NavContainer);
