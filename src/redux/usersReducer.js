import { usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT = "SET-CURRENT";
const SET_COUNT = "SET-ALL-COUNT";
const TOGGLE_PAGE_LOADER_STATUS = "TOGGLE-LOADER";
const TOGGLE_FOLLOW_LOADER_STATUS = "TOGGLE-FOLLOW-LOADER-STATUS";

const initialState = {
  isPageLoading: true,
  followInProgressList: [],
  userList: [],
  page: 1,
  onPageUsersCount: 4,
  usersCount: 0,
  currentPage: 1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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
  });

export const getUsers = (page, onPageUsersCount) => dispatch => {
    dispatch(toggleLoaderStatus(true));
    (async () => {
      let data = await usersAPI.getUsers(page, onPageUsersCount);
      dispatch(toggleLoaderStatus(false));
      dispatch(setUsers(data.items));
      dispatch(setCount(data.totalCount));
    })();
  },
  unFollowUser = id => dispatch => {
    (async () => {
      dispatch(toggleFollowStatus(true, id));
      let data = await usersAPI.unFollowUser(id);
      if (data.resultCode === 0) {
        dispatch(unFollow(id));
        dispatch(toggleFollowStatus(false, id));
      }
    })();
  },
  followUser = id => dispatch => {
    (async () => {
      dispatch(toggleFollowStatus(true, id));
      let data = await usersAPI.followUser(id);
      if (data.resultCode === 0) {
        dispatch(follow(id));
        dispatch(toggleFollowStatus(false, id));
      }
    })();
  };

export default userReducer;
