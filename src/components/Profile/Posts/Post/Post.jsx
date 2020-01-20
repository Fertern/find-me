import React, { useState } from "react";
import s from "./Post.module.css";
import { Button, Fab, ThemeProvider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { blueTheme } from "../../../../materialUI/blueTheme";

const Post = ({ deletePost, message, likes, id }) => {
  let [likesCount, setLikesCount] = useState(+likes);
  const likeButton = () => {
    setLikesCount(++likesCount);
  };
  return (
    <ThemeProvider theme={blueTheme}>
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
    </ThemeProvider>
  );
};

export default Post;
