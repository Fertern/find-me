import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";
import { Paper } from "@material-ui/core";

const Posts = ({ posts, addNewPost, deletePost }) => {
  const postsElements = posts.map(post => (
    <Post
      deletePost={deletePost}
      message={post.message}
      key={post.id}
      id={post.id}
      likes={post.likes}
    />
  ));
  return (
    <Paper elevation={0} className={style.paper}>
      <div className={style.wrapper}>
        <AddPostForm addNewPost={addNewPost} />
        {postsElements}
      </div>
      <hr className={style.spy} /> {/* Empty space for mobile fixed navBar*/}
    </Paper>
  );
};

export default Posts;
