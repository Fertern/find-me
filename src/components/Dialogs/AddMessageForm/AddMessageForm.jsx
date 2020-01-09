import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./AddMessageForm.module.css";
import { onTapEnter } from "../../../Utils/onTapEnter";
import { fieldCleaner } from "../../../Utils/fieldCleaner";

const AddMessageForm = props => {
  const { handleSubmit } = props;
  const customSubmit = fieldCleaner(handleSubmit);
  return (
    <form onSubmit={customSubmit} className={s.wrapper}>
      <Field
        component="textarea"
        name="message"
        className={s.textarea}
        placeholder="Write something..."
        onKeyDown={onTapEnter(customSubmit)}
      />
      <button className={s.button}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessage" })(AddMessageForm);
