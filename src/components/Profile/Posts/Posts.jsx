import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {
  updatePostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profilePageReducer.js";

const Posts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likes={p.likes} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };
  let changeText = () => {
    let text = newPostElement.current.value;
    let action = updatePostTextActionCreator(text);
    props.dispatch(action);
  };
  let sender = e => {
    if (e.keyCode === 13) {
      addPost();
    }
  };
  return (
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea
          placeholder="Write new post!"
          onKeyDown={sender}
          onChange={changeText}
          ref={newPostElement}
          value={props.postText}
        ></textarea>
        <button onClick={addPost}>Try it</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
