import React from "react";
import style from "./SocialLinks.module.css";
import "./SocialLinksFA.css";
import { makeStyles, Paper } from "@material-ui/core";
const unusualSocialMedia = {
  website: "window-maximize",
  mainLink: "link"
};

const socialLinksStyles = makeStyles({
  wrapper: {
    backgroundColor: "var(--primaryColor)",
    display: "flex",
    alignItems: "center"
  }
});
const SocialLinks = ({ links }) => {
  const { wrapper } = socialLinksStyles();
  const linksElements = Object.keys(links).map(serviceName => {
    let serviceClass = serviceName;
    if (unusualSocialMedia.hasOwnProperty(serviceName)) {
      serviceClass = unusualSocialMedia[serviceName];
    }
    if (links[serviceName]) {
      return (
        <a
          className={`fa fa-${serviceClass}`}
          href={links[serviceName]}
          key={serviceName}
        >
          <p>This text doesn't exist</p>
        </a>
      );
    }
    return <span className={`fa fa-${serviceClass} off`} key={serviceName} />;
  });
  return (
    <Paper className={wrapper}>
      <div className={style.links}>{linksElements}</div>
    </Paper>
  );
};

export default SocialLinks;
