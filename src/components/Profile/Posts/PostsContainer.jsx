import React from "react";
import Posts from "./Posts";
import {
  updatePostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profilePageReducer.js";
import StoreContext from "../../../StoreContext";

const PostsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };
        let changeText = e => {
          let text = e.target.value;
          let action = updatePostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <Posts
            addPost={addPost}
            changeText={changeText}
            posts={store.getState().profilePage.posts}
            postText={store.getState().profilePage.postText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
