import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "./../../../Utils/validators/validators";
import s from "./EditProfileForm.module.css";
import CustomInput from "./../../common/FormElements/CustomInput";

const inputGenerator = (Component, contacts) =>
  Object.keys(contacts).map(serviceName => (
    <Component
      key={serviceName}
      name={"contacts." + serviceName}
      placeholder={serviceName}
      component="input"
      //validate={[requiredField, maxLength30]}
    />
  ));

const maxLength30 = maxLengthCreator(25);
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
        <Field
          className={s.link}
          name={"fullName"}
          placeholder="Full name"
          component={CustomInput}
          validate={[requiredField, maxLength30]}
        />
      </div>
      <div className={s.label}>Links to your social media</div>
      <div className={s.contacts}>{inputGenerator(Field, contacts)}</div>
      <div className={s.label}>Are you looking for a job?</div>
      <Field name="lookingForAJob" component="select">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Field>
      <div className={s.label}>About you</div>
      <div>
        <Field
          name={"aboutMe"}
          placeholder="About you"
          component={CustomInput}
          validate={[requiredField, maxLength30]}
        />
      </div>
      <div className={s.label}>Job info</div>
      <div>
        <Field
          name={"lookingForAJobDescription"}
          placeholder="About your job (or about job you want)"
          component={CustomInput}
          validate={[requiredField, maxLength30]}
        />
      </div>
      {error && <div className={s.errorMessage}>{error}</div>}
      <div className="">
        <button type="submit">Submit changes</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "editProfile" })(EditProfileForm);
