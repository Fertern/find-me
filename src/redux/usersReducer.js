const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT = "SET-CURRENT";
const SET_COUNT = "SET-ALL-COUNT";
const TOGGLE_LOADER_STATUS = "TOGGLE-LOADER";

const initialState = {
  isLoaded: true,
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
    case TOGGLE_LOADER_STATUS:
      return {
        ...state,
        isLoaded: action.isLoaded
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
  toggleLoaderStatus = isLoaded => ({
    type: TOGGLE_LOADER_STATUS,
    isLoaded
  });

export default userReducer;
