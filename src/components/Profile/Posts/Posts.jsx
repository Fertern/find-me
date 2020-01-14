import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const Posts = props => {
  const { posts, addNewPost } = props;
  let postsElements = posts.map(p => (
    <Post message={p.message} key={p.id} likes={p.likes} />
  ));
  return (
    <span className={s.wrapper}>
      <AddPostForm addNewPost={addNewPost} />
      <span className={s.posts}>{postsElements}</span>
      <hr className={s.spy} /> {/* Empty space for mobile fixed navBar*/}
    </span>
  );
};

export default Posts;
