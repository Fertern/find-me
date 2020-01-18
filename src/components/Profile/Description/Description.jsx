import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { useStyles } from "./DescriptionMaterial";

const Description = ({ aboutMe, lookingForAJobDescription }) => {
  const { card, title, text } = useStyles();
  return (
    <Card className={card}>
      <CardContent>
        <Typography className={title} color="textSecondary">
          About
        </Typography>
        <Typography className={text} variant="body2" component="p">
          {aboutMe}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={title} color="textSecondary">
          Job description
        </Typography>
        <Typography className={text} variant="body2" component="p">
          {lookingForAJobDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Description;
