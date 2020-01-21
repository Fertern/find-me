import {
  ADD_POST,
  DELETE_POST,
  SET_PROFILE,
  SET_STATUS,
  SET_LAST_USER,
  TOGGLE_PAGE_LOADER_STATUS,
  SET_IS_OWN_PROFILE,
  SET_PHOTO,
  STATUS_ERROR
} from "./selectors";

const initialState = {
  posts: [{ id: 1, message: "Click on the like button", likes: "999" }],
  profile: null,
  status: "",
  statusErrorMessage: null,
  lastUser: null,
  isPageLoading: true,
  isOwnProfile: false
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: `f${(+new Date()).toString(16)}`,
            message: action.postText,
            likes: 0
          }
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== action.id)]
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
        statusErrorMessage: null
      };
    case SET_LAST_USER:
      return {
        ...state,
        lastUser: action.lastUser
      };
    case TOGGLE_PAGE_LOADER_STATUS:
      return {
        ...state,
        isPageLoading: action.isPageLoading
      };
    case SET_IS_OWN_PROFILE:
      return {
        ...state,
        isOwnProfile: action.isOwnProfile
      };
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      };
    case STATUS_ERROR:
      return {
        ...state,
        statusErrorMessage: action.statusErrorMessage
      };

    default:
      return state;
  }
};

export default profilePageReducer;
