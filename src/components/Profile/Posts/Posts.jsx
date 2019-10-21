import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let postsData = [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ];
  return (
    <div className={s.userPosts}>
      <div className={s.text}>My post</div>
      <div className={s.writingArea}>
        <textarea>Write something...</textarea>
        <button>Try it</button>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likes} />
        <Post message={postsData[1].message} likes={postsData[1].likes} />
      </div>
    </div>
  );
};

export default Posts;
