import React from "react";
import classes from "./BlogPostImageAndHeader.module.css";
import { Skeleton } from "@mui/material";

const BlogPostImageAndHeader = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.postImage}>
        <div className={classes.skeleton}>
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={100}
            style={{
              background: "#E5E8EC",
              height: "90vh",
            }}
          />
        </div>
        <div className={classes.filterOverlay}></div>
        <div className={classes.textSection}>
          <div className={classes.textInner}>
            <div>{datum.category}</div>
            <div>{datum.header}</div>
            <div>{datum.previewText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostImageAndHeader;
