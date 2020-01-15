import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading
});

export const withAuthRedirect = Component => {
  const RedirectComponent = ({ isLoading, isAuth, ...props }) => {
    if (isLoading) {
      return <Preloader />;
    }
    if (!isAuth) return <Redirect to={"/login"} />;

    return <Component {...props} />;
  };
  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedRedirectComponent;
};
