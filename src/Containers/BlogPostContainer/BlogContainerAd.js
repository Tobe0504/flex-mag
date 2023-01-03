import React from "react";
import classes from "./BlogContainerAd.module.css";
import { Skeleton } from "@mui/material";

const BlogContainerAd = () => {
  return (
    <div className={classes.container}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={131}
        style={{
          background: "#E5E8EC",
        }}
      />
    </div>
  );
};

export default BlogContainerAd;
