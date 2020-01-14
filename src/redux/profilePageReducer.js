import { profileAPI } from "../api/api";

const ADD_POST = "/profilePage/ADD-POST";
const SET_PROFILE = "/profilePage/SET-PROFILE";
const SET_STATUS = "/profilePage/SET-STATUS";
const SET_LAST_USER = "/profilePage/SET-LAST-USER";
const TOGGLE_PAGE_LOADER_STATUS = "/profilePage/TOGGLE-LOADER";

const initialState = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ],
  profile: null,
  status: "",
  lastUser: null,
  isPageLoading: true
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

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
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

    default:
      return state;
  }
};
export const addPost = postText => ({ type: ADD_POST, postText }),
  setProfile = profile => ({
    type: SET_PROFILE,
    profile
  }),
  setStatus = status => ({
    type: SET_STATUS,
    status
  }),
  setLastUser = lastUser => ({
    type: SET_LAST_USER,
    lastUser
  }),
  toggleLoaderStatus = isPageLoading => ({
    type: TOGGLE_PAGE_LOADER_STATUS,
    isPageLoading
  });

export const setUpProfile = id => async dispatch => {
    dispatch(toggleLoaderStatus(true));
    let data = await profileAPI.getProfile(id);
    dispatch(toggleLoaderStatus(false));
    dispatch(setProfile(data));
  },
  setUpStatus = id => async dispatch => {
    let data = await profileAPI.getStatus(id);
    dispatch(setStatus(data));
  },
  updateUpStatus = status => async dispatch => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(data));
    }
  },
  addNewPost = values => async dispatch => {
    let data = { resultCode: 0 };
    if (data.resultCode === 0) {
      dispatch(addPost(values.post));
    }
  };
export default profilePageReducer;
