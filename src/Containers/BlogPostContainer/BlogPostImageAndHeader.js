import React from "react";
import classes from "./BlogPostImageAndHeader.module.css";

const BlogPostImageAndHeader = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.postImage}>
        <img
          src={datum?.associations?.featureimage?.renditions?.original.href}
          alt={datum?.associations?.featureimage?.description_text}
        />

        <div className={classes.filterOverlay}></div>
        <div className={classes.textSection}>
          <div className={classes.textInner}>
            {datum && <div>{datum?.subject?.name}</div>}
            <div>{datum?.headline}</div>
            <div>{datum?.description_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostImageAndHeader;
