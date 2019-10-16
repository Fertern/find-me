import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea>Write something...</textarea>
        <button>Try it</button>
      </div>
      <div className={s.posts}>
        <Post message="Oh, hi mark" likes="20" />
        <Post message="How about your sex life?" likes="0" />
      </div>
    </div>
  );
};

export default Posts;
