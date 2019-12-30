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
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea
          className={s.textarea}
          placeholder="Write new post!"
          onKeyDown={sender}
          onChange={changeText}
          value={props.postText}
        ></textarea>
        <div className="buttonWrapper">
          <button className={s.button} onClick={addPost}>
            Try it
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
