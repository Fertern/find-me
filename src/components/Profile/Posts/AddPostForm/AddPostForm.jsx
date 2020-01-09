import { Field, reduxForm } from "redux-form";
import React from "react";
import s from "./AddPostForm.module.css";
import {
  requiredField,
  maxLengthCreator
} from "../../../../Utils/validators/validators";
import { onTapEnter } from "../../../../Utils/onTapEnter";

const maxLength20 = maxLengthCreator(20);
const AddPostForm = props => {
  const { handleSubmit } = props;
  return (
    <form className={s.writingArea} onSubmit={handleSubmit}>
      <Field
        className={s.textarea}
        placeholder="Write new post!"
        component="textarea"
        name="post"
        validate={[requiredField, maxLength20]}
        onKeyDown={onTapEnter(handleSubmit)}
      />
      <div className={s.buttonWrapper}>
        <button className={s.button}>Post</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessage" })(AddPostForm);
