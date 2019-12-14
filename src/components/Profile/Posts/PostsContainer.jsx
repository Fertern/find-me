import React from "react";
import Posts from "./Posts";
import {
  updatePostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profilePageReducer.js";

const PostsContainer = props => {
  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };
  let changeText = e => {
    let text = e.target.value;
    let action = updatePostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <Posts
      addPost={addPost}
      changeText={changeText}
      posts={props.store.getState().profilePage.posts}
      postText={props.store.getState().profilePage.postText}
    />
  );
};

export default PostsContainer;
