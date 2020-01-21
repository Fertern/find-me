import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  SET_CURRENT,
  SET_COUNT,
  TOGGLE_PAGE_LOADER_STATUS,
  TOGGLE_FOLLOW_LOADER_STATUS,
  SET_START_NUMBER_IM_ROW
} from "./selectors";
import { usersAPI } from "../../../api/api";
import { thunkErrorDecorator } from "../../../utils/thunkErrorDecorator";
import { showError } from "../errors/actions";

export const follow = userId => ({ type: FOLLOW_USER, userId }),
  unFollow = userId => ({ type: UNFOLLOW_USER, userId }),
  setUsers = userList => ({ type: SET_USERS, userList }),
  setCurrent = current => ({
    type: SET_CURRENT,
    current
  }),
  setCount = count => ({
    type: SET_COUNT,
    count
  }),
  toggleLoaderStatus = isPageLoading => ({
    type: TOGGLE_PAGE_LOADER_STATUS,
    isPageLoading
  }),
  toggleFollowStatus = (isFollowInProgress, userId) => ({
    type: TOGGLE_FOLLOW_LOADER_STATUS,
    isFollowInProgress,
    userId
  }),
  setStartNumberInRow = newRow => ({
    type: SET_START_NUMBER_IM_ROW,
    newRow
  });

export const getUsers = thunkErrorDecorator(
  (page, onPageUsersCount) => async dispatch => {
    dispatch(toggleLoaderStatus(true));

    let data = await usersAPI.getUsers(page, onPageUsersCount);
    dispatch(toggleLoaderStatus(false));
    dispatch(setUsers(data.items));
    dispatch(setCount(data.totalCount));
  }
);
export const unFollowUser = id => async dispatch => {
  try {
    dispatch(toggleFollowStatus(true, id));
    let data = await usersAPI.unFollowUser(id);
    if (data.resultCode === 0) {
      dispatch(unFollow(id));
      dispatch(toggleFollowStatus(false, id));
    }
  } catch (error) {
    dispatch(showError([error.message]));
  } finally {
    dispatch(toggleFollowStatus(false, id));
  }
};
export const followUser = id => async dispatch => {
  try {
    dispatch(toggleFollowStatus(true, id));
    let data = await usersAPI.followUser(id);
    if (data.resultCode === 0) {
      dispatch(follow(id));
      dispatch(toggleFollowStatus(false, id));
    }
  } catch (error) {
    dispatch(showError([error.message]));
  } finally {
    dispatch(toggleFollowStatus(false, id));
  }
};
