import React from "react";
import style from "./AvatarBar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Paper } from "@material-ui/core";
import DefaultLogo from "../../../assets/defaultLogo";

const AvatarBar = ({
  userPhoto: { small, large },
  isOwnProfile,
  setUpPhoto,
  isProfileEditing,
  altText
}) => {
  let useStyles;
  if (isOwnProfile && isProfileEditing) {
    useStyles = makeStyles(theme => ({
      avatar: {
        width: "100%",
        height: "90%",
        backgroundColor: "var(--primaryColor)"
      },
      wrapper: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        padding: "10px 15px",
        backgroundColor: "var(--primaryColor)"
      }
    }));
  } else {
    useStyles = makeStyles(theme => ({
      avatar: {
        width: "100%",
        height: "100%",
        backgroundColor: "var(--primaryColor)"
      },
      wrapper: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        padding: "10px 15px",
        backgroundColor: "var(--primaryColor)"
      }
    }));
  }

  const onSelectPhoto = e => {
    if (e.target.files.length) {
      setUpPhoto(e.target.files[0]);
    }
  };

  const { wrapper, avatar } = useStyles();

  return (
    <div className={style.wrapperAdaptive}>
      <Paper className={wrapper}>
        {large || small ? (
          <Avatar
            alt={altText}
            variant="rounded"
            src={large || small}
            className={avatar}
          />
        ) : (
          <DefaultLogo alt={altText} size="200px" />
        )}

        {isOwnProfile && isProfileEditing && (
          <label>
            <div className={style.inputFile}></div>
            <input
              type="file"
              onChange={onSelectPhoto}
              className={style.customFileInput}
            ></input>
          </label>
        )}
      </Paper>
    </div>
  );
};

export default AvatarBar;
