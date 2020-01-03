import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ],
  postText: "",
  profile: null
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
            message: state.postText,
            likes: 0
          }
        ],
        postText: ""
      };

    case UPDATE_POST_TEXT:
      return { ...state, postText: action.text };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST }),
  updatePost = text => ({
    type: UPDATE_POST_TEXT,
    text
  }),
  setProfile = profile => ({
    type: SET_PROFILE,
    profile
  });

export const setUpProfile = id => dispatch => {
  let userId = id;
  if (!userId) {
    userId = 10;
  }
  (async () => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setProfile(data));
  })();
};

export default profilePageReducer;
