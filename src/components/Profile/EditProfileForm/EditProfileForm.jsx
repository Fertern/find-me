import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "./../../../Utils/validators/validators";
import s from "./EditProfileForm.module.css";
import { fieldGenerator } from "../../../Utils/fieldGenerator";
import { compose } from "redux";
import { connect } from "react-redux";

import BackupIcon from "@material-ui/icons/Backup";
import {
  CustomSelect,
  CustomInputFilled,
  CustomTextareaFilled
} from "../../common/FormElements/CustomElements";
import {
  MenuItem,
  Button,
  ThemeProvider,
  Dialog,
  DialogTitle
} from "@material-ui/core";
import { blueTheme } from "../../../materialUI/blueTheme";

const maxLength30 = maxLengthCreator(30);
const maxLength80 = maxLengthCreator(80);
const maxLength300 = maxLengthCreator(300);
const EditProfileForm = ({
  handleSubmit,
  setUpProfileData,
  error,
  contacts,
  onClose,
  selectedValue,
  open,
  initialValue
}) => {
  useEffect(() => {}, [initialValue]);
  const submit = values => {
    setUpProfileData(values);
  };
  const customSubmit = handleSubmit(submit);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <ThemeProvider theme={blueTheme}>
      <Dialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        scroll={"body"}
      >
        <DialogTitle>Edit your profile</DialogTitle>
        <form className={s.wrapper} onSubmit={customSubmit}>
          <div className={s.block}>
            <div>
              {fieldGenerator(
                "fullName",
                "Full name",
                CustomInputFilled,
                "text",
                [requiredField, maxLength30]
              )}
            </div>
          </div>

          <div className={s.block}>
            {fieldGenerator(
              "aboutMe",
              "About you",
              CustomTextareaFilled,
              "text",
              [maxLength300]
            )}
          </div>

          <div className={s.block}>
            <div className={s.contacts}>
              {fieldGenerator(
                Object.keys(contacts).map(
                  serviceName => "contacts." + serviceName
                ),
                Object.keys(contacts),
                CustomInputFilled,
                "text",
                [maxLength80],
                "same"
              )}
            </div>
          </div>

          <div className={s.select}>
            <span>Are you looking for a job?</span>
            <Field name="lookingForAJob" component={CustomSelect}>
              <MenuItem value="" disabled>
                Are you looking for a job?
              </MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Field>
          </div>

          <div className={s.block}>
            {fieldGenerator(
              "lookingForAJobDescription",
              "About it job",
              CustomTextareaFilled,
              "text",
              [maxLength300]
            )}
          </div>

          <Button
            startIcon={<BackupIcon />}
            variant="contained"
            color="primary"
            type="submit"
            style={{ borderRadius: 0 }}
          >
            Submit changes
          </Button>
        </form>
      </Dialog>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  initialValues: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: "editProfile" })
)(EditProfileForm);
