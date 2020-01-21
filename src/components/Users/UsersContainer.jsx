import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followUser,
  unFollowUser,
  setCurrent,
  getUsers,
  setStartNumberInRow
} from "../../redux/modules/users/actions";
import {
  getUserList,
  getIsPageLoading,
  getCurrentPage,
  getUsersCount,
  getPageSize,
  getFollowInProgress,
  getPageCount,
  getStartNumberInRow
} from "../../redux/modules/users/selectors";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
