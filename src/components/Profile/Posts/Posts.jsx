import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";
import { Paper } from "@material-ui/core";

const Posts = props => {
  const { posts, addNewPost, deletePost } = props;
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
    <Paper elevation={0} className={s.paper}>
      <div className={s.wrapper}>
        <AddPostForm addNewPost={addNewPost} />
        {postsElements}
      </div>
      <hr className={s.spy} /> {/* Empty space for mobile fixed navBar*/}
    </Paper>
  );
};

export default Posts;
