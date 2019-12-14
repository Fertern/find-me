import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likes={p.likes} />
  ));
  let sender = e => {
    if (e.keyCode === 13) {
      props.addPost();
    }
  };
  return (
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea
          placeholder="Write new post!"
          onKeyDown={sender}
          onChange={props.changeText}
          value={props.postText}
        ></textarea>
        <button onClick={props.addPost}>Try it</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
