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
  const { handleSubmit, reset, addNewPost } = props;
  const submit = values => {
    addNewPost(values);
    reset();
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form className={s.writingArea} onSubmit={customSubmit}>
      <Field
        className={s.textarea}
        placeholder="Write new post!"
        component="textarea"
        name="post"
        validate={[requiredField, maxLength20]}
        onKeyDown={onTapEnter(customSubmit)}
      />
      <div className={s.buttonWrapper}>
        <button className={s.button}>Post</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "profileAddPost" })(AddPostForm);
