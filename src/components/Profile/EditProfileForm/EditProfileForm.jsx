import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "./../../../Utils/validators/validators";
import s from "./EditProfileForm.module.css";
import CustomInput from "./../../common/FormElements/CustomInput";
import { fieldGenerator } from "../../../Utils/fieldGenerator";
import { compose } from "redux";
import { connect } from "react-redux";

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
      <div className={s.label}>Full name</div>
      <div>
        {fieldGenerator("fullName", "Full name", CustomInput, "text", [
          requiredField,
          maxLength30
        ])}
      </div>

      <div className={s.label}>About you</div>
      <div>
        {fieldGenerator("aboutMe", "About you", CustomInput, "text", [
          maxLength300
        ])}
      </div>

      <div className={s.label}>Are you looking for a job?</div>
      <Field name="lookingForAJob" component="select">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Field>

      <div className={s.label}>Links to your social media</div>
      <div className={s.contacts}>
        {fieldGenerator(
          Object.keys(contacts).map(serviceName => "contacts." + serviceName),
          Object.keys(contacts),
          CustomInput,
          "text",
          [maxLength80],
          "same"
        )}
      </div>

      <div className={s.label}>Job info</div>
      <div>
        {fieldGenerator(
          "lookingForAJobDescription",
          "About your job (or about job you want)",
          CustomInput,
          "text",
          [maxLength300]
        )}
      </div>
      {error && <div className={s.errorMessage}>{error}</div>}
      <div className="">
        <button type="submit">Submit changes</button>
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
