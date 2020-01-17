import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { showError, hideError } from "./errorsReducer";

const ADD_POST = "/profilePage/ADD-POST";
const SET_PROFILE = "/profilePage/SET-PROFILE";
const SET_STATUS = "/profilePage/SET-STATUS";
const SET_LAST_USER = "/profilePage/SET-LAST-USER";
const TOGGLE_PAGE_LOADER_STATUS = "/profilePage/TOGGLE-LOADER";
const SET_IS_OWN_PROFILE = "/profilePage/SET-IS-OWN-PROFILE";
const SET_PHOTO = "/profilePage/SET-PHOTO";
const STATUS_ERROR = "/profilePage/STATUS-ERROR";

const initialState = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ],
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
  }),
  setIsOwnProfile = isOwnProfile => ({
    type: SET_IS_OWN_PROFILE,
    isOwnProfile
  }),
  setPhoto = photos => ({
    type: SET_PHOTO,
    photos
  }),
  statusError = statusErrorMessage => ({
    type: STATUS_ERROR,
    statusErrorMessage
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
      dispatch(setStatus(status));
    } else if (data.resultCode === 1) {
      dispatch(showError(data.messages));
      dispatch(hideError(data.messages));
    }
  },
  addNewPost = values => async dispatch => {
    let data = { resultCode: 0 };
    if (data.resultCode === 0) {
      dispatch(addPost(values.post));
    }
  },
  setUpPhoto = file => async dispatch => {
    dispatch(toggleLoaderStatus(true));
    let data = await profileAPI.updatePhoto(file);
    dispatch(toggleLoaderStatus(false));
    if (data.resultCode === 0) {
      dispatch(setPhoto(data.data.photos));
    }
  },
  setUpProfileData = profileData => async (dispatch, getState) => {
    let data = await profileAPI.updateProfileData(profileData);
    if (data.resultCode === 0) {
      dispatch(setUpProfile(getState().auth.userId));
    } else {
      let message;
      const errorLocation = [];
      for (let i = 0; i < data.messages.length; i++) {
        message = data.messages[i]
          .split("")
          .slice(30, data.messages[i].length - 1)
          .join("");
        errorLocation.push(message);
      }
      dispatch(
        stopSubmit("editProfile", {
          _error: "Invalid URL format on " + errorLocation
        })
      );
    }
  };
export default profilePageReducer;
