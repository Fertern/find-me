import Users from "./Users";
import { connect } from "react-redux";
import {
  followAction,
  unFollowAction,
  setUsersAction
} from "../../redux/usersReducer";

const mapStateToProps = state => ({
  userList: state.userList.userList
});

const mapDispatchToProps = dispatch => ({
  follow: userId => dispatch(followAction(userId)),
  unfollow: userId => dispatch(unFollowAction(userId)),
  setUsers: userList => dispatch(setUsersAction(userList))
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
