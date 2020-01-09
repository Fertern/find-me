import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ],
  profile: null,
  status: ""
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
  });

export const setUpProfile = id => async dispatch => {
    let data = await profileAPI.getProfile(id);
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
