import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>{props.message}</div>
      <div className={s.stats}>
        <span>
          <i className="fa fa-heart"></i> {props.likes}
        </span>
      </div>
    </div>
  );
};

export default Post;
