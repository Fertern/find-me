import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuth } from "../redux/auth-reducer";
import Preloader from "../components/common/Preloader/Preloader";

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading
});
const mapDispatchToPropsForRedirect = { checkAuth };

export const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isLoading) {
        return <Preloader />;
      }
      if (!this.props.isAuth) return <Redirect to={"/login"} />;

      return <Component {...this.props} />;
    }
  }
  const ConnectedRedirectComponent = connect(
    mapStateToPropsForRedirect,
    mapDispatchToPropsForRedirect
  )(RedirectComponent);
  return ConnectedRedirectComponent;
};
