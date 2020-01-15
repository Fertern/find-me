import s from "./About.module.css";
import React, { useState, useEffect } from "react";

const About = ({ name, job, newStatus, updateUpStatus }) => {
  const [isStatusEditing, toggleEditStatus] = useState(false),
    [status, setStatus] = useState(newStatus);

  useEffect(() => {
    setStatus(newStatus);
  }, [newStatus]);

  const editStatus = () => {
      toggleEditStatus(!isStatusEditing);
      updateUpStatus(status);
    },
    onStatusChange = e => {
      setStatus(e.currentTarget.value);
    };
  return (
    <div className={s.wrapper}>
      <div className={s.name}>{name}</div>
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
      ) : (
        <div onDoubleClick={editStatus} className={s.status}>
          {status || "No status("}
        </div>
      )}
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
