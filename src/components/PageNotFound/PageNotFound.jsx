import React from "react";
import { Typography } from "@material-ui/core";

const PageNotFound = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ margin: "0 auto" }}>
        <Typography
          style={{ color: "rgb(24, 66, 95)", fontSize: "350px", width: "100%" }}
          variant="h1"
        >
          404
        </Typography>
        <Typography
          style={{
            color: "var(--primaryColor)",
            fontSize: "80px",
            width: "100%"
          }}
          variant="h6"
        >
          Page not found
        </Typography>
      </div>
    </div>
  );
};

export default PageNotFound;
