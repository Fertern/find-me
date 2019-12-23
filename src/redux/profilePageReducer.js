const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ],
  postText: ""
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

    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST }),
  updatePostTextActionCreator = text => ({
    type: UPDATE_POST_TEXT,
    text: text
  });

export default profilePageReducer;
