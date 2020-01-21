import { mapNewUserList } from "../../../utils/mapNewUserList";

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

const initialState = {
  isPageLoading: true,
  followInProgressList: [],
  userList: [],
  page: 1,
  onPageUsersCount: 8,
  usersCount: 0,
  currentPage: 1,
  startNumberInRow: 1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        userList: mapNewUserList(state.userList, action.userId, {
          followed: true
        })
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        userList: mapNewUserList(state.userList, action.userId, {
          followed: false
        })
      };

    case SET_USERS:
      return {
        ...state,
        userList: action.userList
      };
    case SET_CURRENT:
      return {
        ...state,
        currentPage: action.current
      };
    case SET_COUNT:
      return {
        ...state,
        usersCount: action.count
      };
    case TOGGLE_PAGE_LOADER_STATUS:
      return {
        ...state,
        isPageLoading: action.isPageLoading
      };
    case TOGGLE_FOLLOW_LOADER_STATUS:
      return {
        ...state,
        followInProgressList: action.isFollowInProgress
          ? [...state.followInProgressList, action.userId]
          : state.followInProgressList.filter(id => id !== action.userId)
      };
    case SET_START_NUMBER_IM_ROW:
      return {
        ...state,
        startNumberInRow: action.newRow
      };

    default:
      return state;
  }
};

export default userReducer;
