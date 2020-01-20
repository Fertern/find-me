import React, { useState } from "react";
import style from "./Post.module.css";
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
      <div className={style.wrapper}>
        <div className={style.content}>
          <span className={style.text}>{message}</span>
          <Button
            style={{ height: "100%" }}
            variant="contained"
            onClick={() => deletePost(id)}
            color="primary"
          >
            <DeleteIcon />
          </Button>
        </div>
        <div className={style.stats}>
          <Fab color="primary" size="small" onClick={likeButton}>
            <FavoriteIcon />
          </Fab>
          <span className={style.likesNum}>{likesCount}</span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Post;
