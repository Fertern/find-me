import style from "./About.module.css";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Fab,
  Box,
  Input
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { aboutStyle } from "./AboutMaterial";
import Tooltip from "@material-ui/core/Tooltip";

const About = ({
  name,
  job,
  newStatus,
  updateUpStatus,
  isOwnProfile,
  isProfileEditing,
  setIsProfileEditing,
  handleClickOpen
}) => {
  const [isStatusEditing, toggleEditStatus] = useState(false),
    [status, setStatus] = useState(newStatus);
  useEffect(() => {
    setStatus(newStatus);
  }, [newStatus]);
  const {
    edit,
    nameBlock,
    lookTrue,
    wrapper,
    lookFalse,
    nameText,
    content,
    statusInput,
    inputWrapper
  } = aboutStyle();
  const editStatus = () => {
      toggleEditStatus(!isStatusEditing);
      updateUpStatus(status);
    },
    onStatusChange = e => {
      if (e.currentTarget.value !== " ") {
        setStatus(e.currentTarget.value);
        toggleEditStatus(true);
      }
    };

  return (
    <Card className={wrapper}>
      <CardContent className={content}>
        <Box className={nameBlock}>
          <Typography className={nameText} variant="h5">
            {name}
          </Typography>

          {isOwnProfile && !isProfileEditing && (
            <Tooltip title="Edit profile">
              <Fab className={edit} onClick={handleClickOpen}>
                <EditIcon />
              </Fab>
            </Tooltip>
          )}
        </Box>
        <div className={style.bottomBlock}>
          {isStatusEditing ? (
            <Paper className={inputWrapper}>
              <Input
                className={statusInput}
                onChange={onStatusChange}
                autoFocus
                onBlur={editStatus}
                placeholder={"Write new status here!"}
                value={status}
              />
            </Paper>
          ) : isOwnProfile ? (
            <Typography onDoubleClick={editStatus} className={style.status}>
              {status || "Double click here to create new status"}
            </Typography>
          ) : (
            <Typography className={style.status}>{status || " "}</Typography>
          )}

          <div className={style.lookingForAJob}>
            <Paper variant="outlined" className={job ? lookTrue : lookFalse}>
              {job ? (
                <>
                  <Typography variant="h6">Searching for a job</Typography>
                  <SearchIcon />
                </>
              ) : (
                <>
                  <Typography variant="h6">Already has a job</Typography>
                  <WorkIcon />
                </>
              )}
            </Paper>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default About;
