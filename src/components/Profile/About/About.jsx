import s from "./About.module.css";
import React, { useState, useEffect } from "react";

const About = ({
  name,
  job,
  newStatus,
  updateUpStatus,
  isOwnProfile,
  isProfileEditing,
  setIsProfileEditing,
  errorMessage
}) => {
  let statusLength;
  if (!newStatus) {
    statusLength = 0;
  } else {
    statusLength = newStatus.length;
  }
  let shortStatus = newStatus;
  if (statusLength > 77) {
    shortStatus =
      newStatus
        .split("")
        .slice(0, 77)
        .join("") + "...";
  }
  const [isStatusEditing, toggleEditStatus] = useState(false),
    [status, setStatus] = useState(shortStatus);
  useEffect(() => {
    setStatus(shortStatus);
  }, [shortStatus]);

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
    <div className={s.wrapper}>
      <div className="nameBlock">
        <span className={s.name}>{name}</span>
        {isOwnProfile && !isProfileEditing && (
          <button onClick={startEditProfile}>Edit</button>
        )}
      </div>
      <div className={s.lookingForAJob}>
        {job ? (
          <span className={s.lookTrue}>Searching for a job!</span>
        ) : (
          <span className={s.lookFalse}>Already has a job</span>
        )}
      </div>
      {isStatusEditing ? (
        <div className={s.changeStatus}>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={editStatus}
            placeholder={"Write new status here!"}
            value={status}
          />
        </div>
      ) : isOwnProfile ? (
        <div
          onDoubleClick={editStatus}
          onClick={() => {
            setStatus(newStatus);
          }}
          className={s.status}
        >
          {status || <span>Double click here to create new status</span>}
        </div>
      ) : (
        <div
          onClick={() => {
            setStatus(status);
          }}
          className={s.status}
        >
          {status || " "}
        </div>
      )}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
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
