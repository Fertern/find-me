import React from "react";
import s from "./SocialLinks.module.css";
import "./SocialLinksFA.css";
const unusualSocialMedia = {
  website: "window-maximize",
  mainLink: "link"
};
const SocialLinks = props => {
  const linksElements = Object.keys(props.links).map(serviceName => {
    let serviceClass = serviceName;
    if (unusualSocialMedia.hasOwnProperty(serviceName)) {
      serviceClass = unusualSocialMedia[serviceName];
    }
    if (props.links[serviceName]) {
      return (
        <a
          className={`fa fa-${serviceClass}`}
          href={props.links[serviceName]}
          key={serviceName}
        >
          <p>This text doesn't exist</p>
        </a>
      );
    }
    return <span className={`fa fa-${serviceClass} off`} key={serviceName} />;
  });
  return <div className={s.links}>{linksElements}</div>;
};

export default SocialLinks;
