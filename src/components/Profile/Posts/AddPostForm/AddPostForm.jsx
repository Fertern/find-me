import { Field, reduxForm } from "redux-form";
import React from "react";
import s from "./AddPostForm.module.css";
import {
  requiredField,
  maxLengthCreator
} from "../../../../Utils/validators/validators";
import { onTapEnter } from "../../../../Utils/onTapEnter";
import { Button } from "@material-ui/core";

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
        validate={[requiredField]}
        onKeyDown={onTapEnter(customSubmit)}
      />
      <div className={s.buttonWrapper}>
        <Button variant="outlined" className={s.button} type="submit">
          Post
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "profileAddPost" })(AddPostForm);
