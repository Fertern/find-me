import React, { useState } from "react";
import s from "./Post.module.css";
import { Button, Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = ({ deletePost, message, likes, id }) => {
  let [likesCount, setLikesCount] = useState(+likes);
  const likeButton = () => {
    setLikesCount(++likesCount);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <span className={s.text}>{message}</span>
        <Button
          style={{ height: "100%" }}
          variant="contained"
          onClick={() => deletePost(id)}
          color="primary"
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className={s.stats}>
        <Fab color="primary" size="small" onClick={likeButton}>
          <FavoriteIcon />
        </Fab>
        <span className={s.likesNum}>{likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
