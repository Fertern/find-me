import React from "react";
import style from "./AvatarBar.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Paper, Button } from "@material-ui/core";
import DefaultLogo from "../../../assets/defaultLogo";
import { AvatarBarEditingStyles, AvatarBarStyles } from "./AvatarBarMaterial";

const AvatarBar = ({
  userPhoto: { small, large },
  isOwnProfile,
  setUpPhoto,
  isProfileEditing,
  altText
}) => {
  const editingClasses = AvatarBarEditingStyles();
  const { avatar, wrapper, inputButton } = AvatarBarStyles();
  const isEditModeOn = isOwnProfile && isProfileEditing;

  const onSelectPhoto = e => {
    if (e.target.files.length) {
      setUpPhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.wrapperAdaptive}>
      <Paper className={wrapper}>
        {large || small ? (
          <Avatar
            alt={altText}
            variant="rounded"
            src={large || small}
            className={isEditModeOn ? editingClasses.avatar : avatar}
          />
        ) : (
          <DefaultLogo alt={altText} size="200px" />
        )}

        {isOwnProfile && isProfileEditing && (
          <label>
            <input
              onChange={onSelectPhoto}
              className={style.customFileInput}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                className={inputButton}
                component="span"
              >
                Upload new avatar
              </Button>
            </label>
          </label>
        )}
      </Paper>
    </div>
  );
};

export default AvatarBar;
