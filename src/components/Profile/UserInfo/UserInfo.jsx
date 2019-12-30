import React from "react";
import s from "./UserInfo.module.css";
import "./../../../styles/social-media.css";
const unusualSocialMedia = {
  website: "window-maximize",
  mainLink: "link"
};

const UserInfo = props => {
  const profile = props.profile;
  const contacts = profile.contacts;
  const social = Object.keys(contacts).map(serviceName => {
    let serviceClass = serviceName;
    if (unusualSocialMedia.hasOwnProperty(serviceName)) {
      serviceClass = unusualSocialMedia[serviceName];
    }
    if (contacts[serviceName]) {
      return (
        <a
          className={`fa fa-${serviceClass}`}
          href={contacts[serviceName]}
          key={serviceName}
        >
          <p>This text doesn't exist</p>
        </a>
      );
    }
    return <span className={`fa fa-${serviceClass} off`} key={serviceName} />;
  });
  if (!profile.photos.large) {
    profile.photos.large =
      "https://www.soluzionidifferenti.it/wp-content/uploads/2017/06/USER-LOGO.png";
  }
  return (
    <div className={s.wrapper}>
      <div className={s.banner} src="" alt=""></div>
      <div className={s.overInfo}>
        <div className={s.avatar}>
          <div className={s.logoWrap}>
            <img className={s.logo} src={profile.photos.large} alt=""></img>
          </div>
          <div className={s.lookingForAJob}>
            {profile.lookingForAJob ? (
              <span className={s.lookTrue}>Searching for a job!</span>
            ) : (
              <span className={s.lookFalse}>Already has a job</span>
            )}
          </div>
        </div>
        <div className={s.local}>
          <div className={s.name}>{profile.fullName}</div>
          <div className={s.shortDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            rerum!
          </div>
        </div>
        <div className={s.contacts}>{social}</div>
      </div>
      <hr className={s.decorLine}></hr>
      <div className={s.underInfo}>
        <div className={s.fullDesc}>
          {profile.lookingForAJobDescription}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iure
          sint error iste? Mollitia eum dicta earum, dolorum quae est enim
          explicabo dolore quam sapiente corrupti pariatur ipsam veniam sint
          odio commodi iste quia ipsa minima tempora similique reiciendis
          dolores eaque? Quos at sunt dolores ut consectetur praesentium magnam
          modi ad voluptate doloremque quod repudiandae harum, repellendus,
          beatae laboriosam explicabo voluptates ducimus. Non facere eligendi
          deleniti labore.
        </div>
      </div>
      <hr className={s.decorLine}></hr>
    </div>
  );
};

export default UserInfo;
