import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followUser,
  unFollowUser,
  setCurrent,
  getUsers
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

class UsersReceiver extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.onPageUsersCount);
  }
  changeCurrent = page => {
    this.props.getUsers(page, this.props.onPageUsersCount);
    this.props.setCurrent(page);
  };

  render() {
    return (
      <div>
        {this.props.isPageLoading ? <Preloader /> : null}
        <Users {...this.props} changeCurrent={this.changeCurrent} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isPageLoading: state.usersPage.isPageLoading,
  followInProgressList: state.usersPage.followInProgressList,
  userList: state.usersPage.userList,
  page: state.usersPage.page,
  onPageUsersCount: state.usersPage.onPageUsersCount,
  usersCount: state.usersPage.usersCount,
  currentPage: state.usersPage.currentPage
});

const mapDispatchToProps = {
  followUser,
  unFollowUser,
  setCurrent,
  getUsers
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersReceiver);

export default UsersContainer;
