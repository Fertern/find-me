import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likes={p.likes} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let changeText = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
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
