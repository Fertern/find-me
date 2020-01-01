import React from "react";
import s from "./About.module.css";

const About = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.name}>{props.name}</div>
      <div className={s.lookingForAJob}>
        {props.job ? (
          <span className={s.lookTrue}>Searching for a job!</span>
        ) : (
          <span className={s.lookFalse}>Already has a job</span>
        )}
      </div>
      <div className={s.status}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        similique minus alias quae nihil? Quisquam dignissimos sunt
      </div>
    </div>
  );
};

export default About;
