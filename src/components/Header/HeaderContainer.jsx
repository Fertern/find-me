import React, { Component } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuth } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
        headers: {
          "API-KEY": "8200782f-28dc-4c70-82bb-5f5cbe3f8b59"
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuth(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userId
});

const mapDispatchToProps = { setAuth };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
