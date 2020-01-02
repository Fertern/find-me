import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} key={p.id} likes={p.likes} />
  ));
  const changeText = e => {
    let text = e.target.value;
    props.updatePost(text);
  };
  const addPost = () => {
    props.addPost();
  };
  const sender = e => {
    if (e.keyCode === 13) {
      props.addPost();
      e.preventDefault();
    }
  };
  return (
    <span className={s.wrapper}>
      <span className={s.writingArea}>
        <textarea
          className={s.textarea}
          placeholder="Write new post!"
          onKeyDown={sender}
          onChange={changeText}
          value={props.postText}
        ></textarea>
        <div className={s.buttonWrapper}>
          <button className={s.button} onClick={addPost}>
            Post
          </button>
        </div>
      </span>
      <span className={s.posts}>{postsElements}</span>
      <hr className={s.spy} /> {/* Empty space for mobile fixed navBar*/}
    </span>
  );
};

export default Posts;
