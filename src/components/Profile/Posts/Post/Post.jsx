import React, { useState } from "react";
import s from "./Post.module.css";

const Post = props => {
  let [likes, setLikes] = useState(+props.likes);
  const likeButton = () => {
    setLikes(++likes);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.text}>{props.message}</div>
      <div className={s.stats}>
        <span>
          <i className="fa fa-heart" onClick={likeButton}></i> {likes}
        </span>
      </div>
    </div>
  );
};

export default Post;
