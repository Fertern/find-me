import React from "react";
import s from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import AvatarBar from "./AvatarBar/AvatarBar";
import About from "./About/About";
import SocialLinks from "./SocialLinks/SocialLinks";
import Description from "./Description/Description";

const Profile = props => {
  const { setUpStatus, status, updateUpStatus, profile } = props;
  console.log(profile);
  console.log(setUpStatus);
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
        <AvatarBar photo={photos} />
        <div className={s.infoBlock}>
          <About
            name={fullName}
            job={lookingForAJob}
            status={status}
            updateUpStatus={updateUpStatus}
          />
          <SocialLinks links={contacts} />
        </div>
      </div>
      <Description text={lookingForAJobDescription} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
