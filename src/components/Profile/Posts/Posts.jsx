import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let posts = [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ];
  let postsElements = posts.map(p => (
    <Post message={p.message} likes={p.likes} />
  ));
  return (
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea>Write something...</textarea>
        <button>Try it</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
