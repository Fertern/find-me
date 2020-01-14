import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./AddMessageForm.module.css";
import {
  requiredField,
  maxLengthCreator
} from "../../../Utils/validators/validators";
import { onTapEnter } from "../../../Utils/onTapEnter";

const maxLength300 = maxLengthCreator(300);
const AddMessageForm = props => {
  const { handleSubmit, reset, addNewMessage } = props;
  const submit = values => {
    addNewMessage(values);
    reset();
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form onSubmit={customSubmit} className={s.wrapper}>
      <Field
        component="textarea"
        name="message"
        className={s.textarea}
        placeholder="Write something..."
        validate={[requiredField, maxLength300]}
        onKeyDown={onTapEnter(customSubmit)}
      />
      <button className={s.button}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessage" })(AddMessageForm);
