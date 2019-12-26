import React from "react";
import Users from "./Users";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrent,
  setCount,
  toggleLoaderStatus
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

class UsersReceiver extends React.Component {
  componentDidMount() {
    this.props.toggleLoaderStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.onPageUsersCount}`
      )
      .then(response => {
        this.props.toggleLoaderStatus(false);
        this.props.setUsers(response.data.items);
        this.props.setCount(response.data.totalCount);
      });
  }
  changeCurrent = p => {
    this.props.toggleLoaderStatus(true);
    this.props.setCurrent(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.onPageUsersCount}`
      )
      .then(response => {
        this.props.toggleLoaderStatus(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div>
        {this.props.isLoaded ? <Preloader /> : null}
        <Users
          usersCount={this.props.usersCount}
          page={this.props.page}
          userList={this.props.userList}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          changeCurrent={this.changeCurrent}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoaded: state.usersPage.isLoaded,
  userList: state.usersPage.userList,
  page: state.usersPage.page,
  onPageUsersCount: state.usersPage.onPageUsersCount,
  usersCount: state.usersPage.usersCount,
  currentPage: state.usersPage.currentPage
});

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setCurrent,
  setCount,
  toggleLoaderStatus
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersReceiver);

export default UsersContainer;
