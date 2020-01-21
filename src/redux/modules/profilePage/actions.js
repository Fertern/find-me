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
import { profileAPI } from "../../../api/api";
import { stopSubmit } from "redux-form";
import { showError } from "../errors/actions";
import { thunkErrorDecorator } from "../../../utils/thunkErrorDecorator";

export const addPost = postText => ({ type: ADD_POST, postText }),
  setProfile = profile => ({
    type: SET_PROFILE,
    profile
  }),
  deletePost = id => {
    return {
      type: DELETE_POST,
      id
    };
  },
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

export const updateUpStatus = thunkErrorDecorator(status => async dispatch => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  } else if (data.resultCode === 1) {
    dispatch(showError(data.messages));
  }
});
export const setUpProfile = thunkErrorDecorator(id => async dispatch => {
  dispatch(toggleLoaderStatus(true));
  let data = await profileAPI.getProfile(id);
  dispatch(toggleLoaderStatus(false));
  dispatch(setProfile(data));
});
export const setUpStatus = thunkErrorDecorator(id => async dispatch => {
  let data = await profileAPI.getStatus(id);
  dispatch(setStatus(data));
});

export const addNewPost = thunkErrorDecorator(values => async dispatch => {
  let data = { resultCode: 0 };
  if (data.resultCode === 0) {
    dispatch(addPost(values.post));
  }
});

export const setUpPhoto = thunkErrorDecorator(file => async dispatch => {
  dispatch(toggleLoaderStatus(true));
  let data = await profileAPI.updatePhoto(file);
  dispatch(toggleLoaderStatus(false));
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos));
  }
});
export const setUpProfileData = thunkErrorDecorator(
  profileData => async (dispatch, getState) => {
    let data = await profileAPI.updateProfileData(profileData);
    if (data.resultCode === 0) {
      dispatch(setUpProfile(getState().auth.userId));
    } else if (data.resultCode === 1) {
      let message;
      const errorLocation = [];
      for (let i = 0; i < data.messages.length; i++) {
        message = data.messages[i]
          .split("")
          .slice(30, data.messages[i].length - 1)
          .join("");
        errorLocation.push(` ${message}`);
      }
      const formProfileErrorMessage = [
        "Invalid URL format on " + errorLocation + " "
      ];
      dispatch(
        stopSubmit("editProfile", {
          _error: formProfileErrorMessage
        })
      );
      dispatch(showError(formProfileErrorMessage));
    }
  }
);
