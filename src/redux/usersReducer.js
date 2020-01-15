import { usersAPI } from "../api/api";
import { mapNewUserList } from "../Utils/mapNewUserList";

const FOLLOW_USER = "/users/FOLLOW-USER";
const UNFOLLOW_USER = "/users/UNFOLLOW-USER";
const SET_USERS = "/users/SET-USERS";
const SET_CURRENT = "/users/SET-CURRENT";
const SET_COUNT = "/users/SET-ALL-COUNT";
const TOGGLE_PAGE_LOADER_STATUS = "/users/TOGGLE-LOADER";
const TOGGLE_FOLLOW_LOADER_STATUS = "/users/TOGGLE-FOLLOW-LOADER-STATUS";
const SET_START_NUMBER_IM_ROW = "./users/SET-START-NUMBER-IM-ROW";

const initialState = {
  isPageLoading: true,
  followInProgressList: [],
  userList: [],
  page: 1,
  onPageUsersCount: 4,
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

export const getUsers = (page, onPageUsersCount) => async dispatch => {
    dispatch(toggleLoaderStatus(true));

    let data = await usersAPI.getUsers(page, onPageUsersCount);
    dispatch(toggleLoaderStatus(false));
    dispatch(setUsers(data.items));
    dispatch(setCount(data.totalCount));
  },
  unFollowUser = id => async dispatch => {
    dispatch(toggleFollowStatus(true, id));
    let data = await usersAPI.unFollowUser(id);
    if (data.resultCode === 0) {
      dispatch(unFollow(id));
      dispatch(toggleFollowStatus(false, id));
    }
  },
  followUser = id => async dispatch => {
    dispatch(toggleFollowStatus(true, id));
    let data = await usersAPI.followUser(id);
    if (data.resultCode === 0) {
      dispatch(follow(id));
      dispatch(toggleFollowStatus(false, id));
    }
  };

export default userReducer;
