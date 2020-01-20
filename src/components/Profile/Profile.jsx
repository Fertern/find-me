import React, { useState } from "react";
import s from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import AvatarBar from "./AvatarBar/AvatarBar";
import About from "./About/About";
import SocialLinks from "./SocialLinks/SocialLinks";
import Description from "./Description/Description";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const Profile = ({
  status,
  updateUpStatus,
  profile,
  isOwnProfile,
  setUpPhoto,
  setUpProfileData,
  errorMessage
}) => {
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [open, setOpen] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const {
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    photos
  } = profile;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div className={s.profile}>
      <div className={s.overBlock}>
        <AvatarBar
          userPhoto={photos}
          isOwnProfile={isOwnProfile}
          setUpPhoto={setUpPhoto}
          isProfileEditing={isProfileEditing}
          altText={fullName}
        />
        <About
          name={fullName}
          job={lookingForAJob}
          newStatus={status}
          updateUpStatus={updateUpStatus}
          isOwnProfile={isOwnProfile}
          isProfileEditing={isProfileEditing}
          setIsProfileEditing={setIsProfileEditing}
          errorMessage={errorMessage}
          handleClickOpen={handleClickOpen}
        />
        <SocialLinks links={contacts} />
      </div>
      {isOwnProfile && (
        <EditProfileForm
          setUpProfileData={setUpProfileData}
          contacts={contacts}
          open={open}
          onClose={handleClose}
          fullScreen
        />
      )}
      <Description
        aboutMe={aboutMe}
        lookingForAJobDescription={lookingForAJobDescription}
      />
      {isOwnProfile && <PostsContainer />}
    </div>
  );
};

export default Profile;
