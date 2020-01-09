import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const Posts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} key={p.id} likes={p.likes} />
  ));
  const addPost = values => {
    props.addPost(values.post);
  };
  return (
    <span className={s.wrapper}>
      <AddPostForm onSubmit={addPost} />
      <span className={s.posts}>{postsElements}</span>
      <hr className={s.spy} /> {/* Empty space for mobile fixed navBar*/}
    </span>
  );
};

export default Posts;
