import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "./../../../Utils/validators/validators";
import s from "./EditProfileForm.module.css";
import CustomInput, {
  CustomSelect
} from "./../../common/FormElements/CustomInput";
import { fieldGenerator } from "../../../Utils/fieldGenerator";
import { compose } from "redux";
import { connect } from "react-redux";

import { CustomInputFilled } from "./../../common/FormElements/CustomInput";
import { Typography, MenuItem, Button } from "@material-ui/core";

const maxLength30 = maxLengthCreator(30);
const maxLength80 = maxLengthCreator(80);
const maxLength300 = maxLengthCreator(300);
const EditProfileForm = ({
  handleSubmit,
  setUpProfileData,
  error,
  contacts
}) => {
  const submit = values => {
    setUpProfileData(values);
  };
  const customSubmit = handleSubmit(submit);

  return (
    <form className={s.wrapper} onSubmit={customSubmit}>
      <Typography variant="h5" className={s.label}>
        Full name
      </Typography>
      <div>
        {fieldGenerator("fullName", "Full name", CustomInputFilled, "text", [
          requiredField,
          maxLength30
        ])}
      </div>

      <Typography variant="h5" className={s.label}>
        About you
      </Typography>

      {fieldGenerator("aboutMe", "About you", CustomInputFilled, "text", [
        maxLength300
      ])}

      <Typography variant="h5" className={s.label}>
        Are you looking for a job?
      </Typography>
      <Field name="lookingForAJob" component={CustomSelect}>
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Field>

      <Typography variant="h5" className={s.label}>
        Links to your social media
      </Typography>
      <div className={s.contacts}>
        {fieldGenerator(
          Object.keys(contacts).map(serviceName => "contacts." + serviceName),
          Object.keys(contacts),
          CustomInputFilled,
          "text",
          [maxLength80],
          "same"
        )}
      </div>

      <Typography variant="h5" className={s.label}>
        Job info
      </Typography>

      {fieldGenerator(
        "lookingForAJobDescription",
        "About your job",
        CustomInputFilled,
        "text",
        [maxLength300]
      )}

      <div className="">
        <Button variant="outlined" type="submit">
          Submit changes
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  initialValues: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: "editProfile" })
)(EditProfileForm);
