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
  if (!profile) {
    return <Preloader />;
  }
  const {
    //aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    photos
  } = profile;
  return (
    <div className={s.profile}>
      <div className={s.overBlock}>
        <AvatarBar
          userPhoto={photos}
          isOwnProfile={isOwnProfile}
          setUpPhoto={setUpPhoto}
          isProfileEditing={isProfileEditing}
        />

        <div className={s.infoBlock}>
          <About
            name={fullName}
            job={lookingForAJob}
            newStatus={status}
            updateUpStatus={updateUpStatus}
            isOwnProfile={isOwnProfile}
            isProfileEditing={isProfileEditing}
            setIsProfileEditing={setIsProfileEditing}
            errorMessage={errorMessage}
          />
          <SocialLinks links={contacts} />
        </div>
      </div>
      {isOwnProfile && isProfileEditing && (
        <EditProfileForm
          setUpProfileData={setUpProfileData}
          contacts={contacts}
        />
      )}
      <Description text={lookingForAJobDescription} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
