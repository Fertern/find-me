import s from "./About.module.css";
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
import EditIcon from "@material-ui/icons/Edit";
import { aboutStyle } from "./AboutStyle";

const About = ({
  name,
  job,
  newStatus,
  updateUpStatus,
  isOwnProfile,
  isProfileEditing,
  setIsProfileEditing
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
    lookingForAJob,
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
  const startEditProfile = () => {
    setIsProfileEditing(true);
  };

  return (
    <Card className={wrapper}>
      <CardContent className={content}>
        <Box className={nameBlock}>
          <Typography className={nameText} variant="h5">
            {name}
          </Typography>

          {isOwnProfile && !isProfileEditing && (
            <Fab className={edit} onClick={startEditProfile}>
              <EditIcon />
            </Fab>
          )}
        </Box>
        <div className={s.bottomBlock}>
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
            <Typography onDoubleClick={editStatus} className={s.status}>
              {status || (
                <Typography>Double click here to create new status</Typography>
              )}
            </Typography>
          ) : (
            <Typography className={s.status}>{status || " "}</Typography>
          )}

          <div className={lookingForAJob}>
            {job ? (
              <Paper variant="outlined" className={lookTrue}>
                <Typography>Searching for a job!</Typography>
              </Paper>
            ) : (
              <Paper className={lookFalse}>Already has a job</Paper>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default About;
// state = {
//   isStatusEditing: false,
//   status: newStatus
// };
// componentDidUpdate(prevProps, prevState) {
//   if (prevnewStatus !== newStatus) {
//     setState({
//       status: newStatus
//     });
//   }
// }
// editStatus = () => {
//   setState({ isStatusEditing: !state.isStatusEditing });
//   props.updateUpStatus(state.status);
// };
// onStatusChange = e => {
//   setState({ status: e.currentTarget.value });
// };
