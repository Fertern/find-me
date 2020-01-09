import React from "react";
import s from "./CustomInput.module.css";

const CustomInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.wrapper + " " + (hasError ? s.error : "")}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default CustomInput;
