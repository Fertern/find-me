import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.post}>
      <div className={s.item}>
        <img className={s.logo} alt=""></img>
        <div>{props.message}</div>
        <span>Like {props.likes}</span>
        <span>Burn!</span>
      </div>
    </div>
  );
};

export default Post;
