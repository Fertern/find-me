import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followUser,
  unFollowUser,
  setCurrent,
  getUsers,
  setStartNumberInRow
} from "../../redux/usersReducer";
import {
  getUserList,
  getIsPageLoading,
  getCurrentPage,
  getUsersCount,
  getPageSize,
  getFollowInProgress,
  getPageCount,
  getStartNumberInRow
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, onPageUsersCount } = this.props;
    this.props.getUsers(currentPage, onPageUsersCount);
  }
  changeCurrent = page => {
    const { setCurrent, getUsers, onPageUsersCount } = this.props;
    setCurrent(page);
    getUsers(page, onPageUsersCount);
  };

  render() {
    return <Users {...this.props} changeCurrent={this.changeCurrent} />;
  }
}
// const mapStateToProps = state => ({
//   isPageLoading: state.usersPage.isPageLoading,
//   followInProgressList: state.usersPage.followInProgressList,
//   userList: state.usersPage.userList,
//   page: state.usersPage.page,
//   onPageUsersCount: state.usersPage.onPageUsersCount,
//   usersCount: state.usersPage.usersCount,
//   currentPage: state.usersPage.currentPage
// });

const mapStateToProps = state => ({
  isPageLoading: getIsPageLoading(state),
  followInProgressList: getFollowInProgress(state),
  userList: getUserList(state),
  page: getPageCount(state),
  onPageUsersCount: getPageSize(state),
  usersCount: getUsersCount(state),
  currentPage: getCurrentPage(state),
  startNumberInRow: getStartNumberInRow(state)
});

const mapDispatchToProps = {
  followUser,
  unFollowUser,
  setCurrent,
  getUsers,
  setStartNumberInRow
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
