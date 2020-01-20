import { Field, reduxForm } from "redux-form";
import React from "react";
import s from "./AddPostForm.module.css";
import { requiredField } from "../../../../Utils/validators/validators";
import { onTapEnter } from "../../../../Utils/onTapEnter";
import { Button, ThemeProvider } from "@material-ui/core";
import { blueTheme } from "../../../../materialUI/blueTheme";

const AddPostForm = props => {
  const { handleSubmit, reset, addNewPost } = props;
  const submit = values => {
    addNewPost(values);
    reset();
  };
  const customSubmit = handleSubmit(submit);
  return (
    <ThemeProvider theme={blueTheme}>
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
          <Button
            variant="contained"
            color="primary"
            className={s.button}
            type="submit"
            style={{
              width: "20%",
              marginLeft: "80%",
              color: "white"
            }}
          >
            Post
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};

export default reduxForm({ form: "profileAddPost" })(AddPostForm);
