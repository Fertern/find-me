import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrent,
  setCount,
  toggleLoaderStatus,
  toggleFollowStatus
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersReceiver extends React.Component {
  componentDidMount() {
    this.props.toggleLoaderStatus(true);
    (async () => {
      let data = await usersAPI.getUsers(
        this.props.page,
        this.props.onPageUsersCount
      );
      this.props.toggleLoaderStatus(false);
      this.props.setUsers(data.items);
      this.props.setCount(data.totalCount);
    })();
  }
  changeCurrent = p => {
    this.props.toggleLoaderStatus(true);
    this.props.setCurrent(p);
    (async () => {
      let data = await usersAPI.getUsers(p, this.props.onPageUsersCount);
      this.props.toggleLoaderStatus(false);
      this.props.setUsers(data.items);
    })();
  };

  render() {
    return (
      <div>
        {this.props.isPageLoaded ? <Preloader /> : null}
        <Users
          usersCount={this.props.usersCount}
          page={this.props.page}
          userList={this.props.userList}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          changeCurrent={this.changeCurrent}
          toggleFollowStatus={this.props.toggleFollowStatus}
          followInProgressList={this.props.followInProgressList}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isPageLoaded: state.usersPage.isPageLoaded,
  followInProgressList: state.usersPage.followInProgressList,
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
  toggleLoaderStatus,
  toggleFollowStatus
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersReceiver);

export default UsersContainer;
