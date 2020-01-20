import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./AddMessageForm.module.css";
import {
  requiredField,
  maxLengthCreator
} from "../../../Utils/validators/validators";
import { onTapEnter } from "../../../Utils/onTapEnter";

const maxLength300 = maxLengthCreator(300);

const AddMessageForm = ({ handleSubmit, reset, addNewMessage }) => {
  const submit = values => {
    addNewMessage(values);
    reset();
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form onSubmit={customSubmit} className={style.wrapper}>
      <Field
        component="textarea"
        name="message"
        className={style.textarea}
        placeholder="Write something..."
        validate={[requiredField, maxLength300]}
        onKeyDown={onTapEnter(customSubmit)}
      />
      <button className={style.button}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessage" })(AddMessageForm);
