import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { checkAuth } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userId
});

const mapDispatchToProps = { checkAuth };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
