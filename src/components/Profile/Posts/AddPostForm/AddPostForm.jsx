import { Field, reduxForm } from "redux-form";
import React from "react";
import style from "./AddPostForm.module.css";
import { requiredField } from "../../../../Utils/validators/validators";
import { onTapEnter } from "../../../../Utils/onTapEnter";
import { Button, ThemeProvider } from "@material-ui/core";
import { blueTheme } from "../../../../materialUI/blueTheme";

const AddPostForm = ({ handleSubmit, reset, addNewPost }) => {
  const submit = values => {
    addNewPost(values);
    reset();
  };
  const customSubmit = handleSubmit(submit);
  return (
    <ThemeProvider theme={blueTheme}>
      <form className={style.writingArea} onSubmit={customSubmit}>
        <Field
          className={style.textarea}
          placeholder="Write new post!"
          component="textarea"
          name="post"
          validate={[requiredField]}
          onKeyDown={onTapEnter(customSubmit)}
        />
        <div className={style.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
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
