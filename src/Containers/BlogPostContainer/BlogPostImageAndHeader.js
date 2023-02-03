import React from "react";
import classes from "./BlogPostImageAndHeader.module.css";
import { Skeleton } from "@mui/material";

const BlogPostImageAndHeader = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.postImage}>
        <img src={datum.associations.featureimage.renditions.original.href} />

        <div className={classes.filterOverlay}></div>
        <div className={classes.textSection}>
          <div className={classes.textInner}>
            <div>{datum.subject[1].name}</div>
            <div>{datum.headline}</div>
            <div>{datum.description_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostImageAndHeader;
